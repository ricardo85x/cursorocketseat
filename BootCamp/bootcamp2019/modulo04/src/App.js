import React from 'react'
import TechList from './components/TechList'
import './App.css'

import logowhats from './assets/logowhats.jpg'

function App() {

    
    return (
        <div>
            <h1>Hello Ricardo</h1> 
            <p>
                <img width="20px" src={logowhats}/>
            </p>
            <TechList />
        </div>
        
    
    )
}

export default App;