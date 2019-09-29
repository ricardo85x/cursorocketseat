
import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { useSelector, useDispatch } from 'react-redux'

import TechList from '~/components/TechList_Aula5-X'
import { addTech } from '~/store/modules/techs/actions'


jest.mock('react-redux')

describe('TechList component', () => {

    it('should render tech list', () => {
        useSelector.mockImplementation(cb => cb({
            techs: ['Node.js', 'ReactJS']
        }) )

        const { getByTestId,  getByText, debug } = render(<TechList />)

        debug()
        expect(getByTestId('tech-list')).toContainElement(getByText('Node.js'))
        expect(getByTestId('tech-list')).toContainElement(getByText('ReactJS'))

    })

    it('should be able to add new tech', () => {
        const {getByTestId, getByLabelText} = render(<TechList />)

        const dispatch = jest.fn();

        useDispatch.mockReturnValue(dispatch)

        fireEvent.change(getByLabelText('Tech'), { target: { value: 'Node.js'}})
        fireEvent.submit(getByTestId('test-form'))

        console.log(dispatch.mock.calls)
        expect(dispatch).toHaveBeenCalledWith(addTech('Node.js'))


    })
 
})