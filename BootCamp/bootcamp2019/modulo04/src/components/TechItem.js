import React from 'react'
import PropTypes from 'prop-types'

function TechItem({tech, index, onDelete, onDelete2}) {

    return (
    <li key={index}> 
        {tech}
        <button onClick={ () => onDelete(index) } type="button">Remover</button>
        <button onClick={ onDelete2 } type="button">Remover 2</button>
    </li>
    )
}

// TechItem.defaultProps = {
//     tech: 'batata',
//     index: 0,
// }

TechItem.PropTypes = {
    tech: PropTypes.number.isRequired,
    onDelete: PropTypes.func.isRequired

}

export default TechItem;