
import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'

import TechList from '~/components/TechList_Aula1-4'

describe('TechList component', () => {

    // Aula 1 - 4
    beforeEach(() => {
      localStorage.clear()
    })
    it('should be able to add new tech', () => {
        const { getByText, getByTestId, getByLabelText, debug } =  render(<TechList />)

        // debug()
        fireEvent.change(getByLabelText('Tech'), { target: { value: 'Node.js'}})
        fireEvent.submit(getByTestId('test-form'))
        // debug()

       expect(getByTestId('tech-list')).toContainElement(getByText('Node.js'))
       expect(getByLabelText('Tech')).toHaveValue('')

    })


    it('should store techs in storage', () => {
        let { getByText, getByTestId, getByLabelText, debug } =  render(<TechList />)

        fireEvent.change(getByLabelText('Tech'), { target: { value: 'Node.js'}})
        fireEvent.submit(getByTestId('test-form'))

        cleanup();

        ({ getByText, getByTestId, getByLabelText, debug } =  render(<TechList />));

        expect(localStorage.setItem).toHaveBeenCalledWith('techs', JSON.stringify(['Node.js']))
        expect(getByTestId('tech-list')).toContainElement(getByText('Node.js'))


    })
})