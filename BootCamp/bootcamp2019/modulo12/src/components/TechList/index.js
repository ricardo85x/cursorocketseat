import React, { useState } from 'react'


export default function TechList() {

    const [techs, setTech] = useState([])

    function handleAddTech() {
        setTech([...techs, 'Node.js'])
    }


    return (
        <div>
            <ul data-testid="tech-list"> 
                { techs.map( (item, index) => <li key={String(index)}>{item}</li>)}
            </ul>
            <button onClick={handleAddTech}>Adicionar</button>

        </div>
    )
}