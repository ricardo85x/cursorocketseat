import React, { useState } from 'react'


export default function TechList() {

    const [techs, setTech] = useState([])
    const [newTech, setNewTech] = useState('')

    function handleAddTech() {
        setTech([...techs, newTech])
        setNewTech('')
    }


    return (
        <form data-testid="test-form" onSubmit={handleAddTech}>
            <ul data-testid="tech-list"> 
                { techs.map( (item, index) => <li key={String(index)}>{item}</li>)}
            </ul>
            <label htmlFor="tech">Tech</label>
            <input id="tech" value={newTech} onChange={e => setNewTech(e.target.value)} type="text"/>

            
            <button onClick={handleAddTech}>Adicionar</button>

        </form>
    )
}