import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { addTech } from '~/store/modules/techs/actions'

export default function TechList() {

    const [newTech, setNewTech] = useState('')

    const techs = useSelector(state => state.techs)

    const dispatch = useDispatch()

    function handleAddTech() {
       
        dispatch(addTech(newTech))
        setNewTech('')
    }


    return (
        <form data-testid="test-form" onSubmit={handleAddTech}>
            <ul data-testid="tech-list"> 
                { techs.map( (item, index) => <li key={`li-${String(index)}`}>{item}</li>)}
            </ul>
            <label htmlFor="tech">Tech</label>
            <input id="tech" value={newTech} onChange={e => setNewTech(e.target.value)} type="text"/>

            
            <button onClick={handleAddTech}>Adicionar</button>

        </form>
    )
}