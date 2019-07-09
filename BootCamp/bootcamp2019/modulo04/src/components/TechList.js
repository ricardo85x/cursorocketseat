import React, { Component } from 'react';
import TechItem from './TechItem';

class TechList extends Component {

    state = {
        techs: [],
        newTech: ''
    }

    // Executado assim que o componente aparece na tela
    componentDidMount() {
        const techs = localStorage.getItem("techs")
        if(techs) {
            this.setState({techs: JSON.parse(techs)})
        }
    }

    // Executado sempre que houve alterações nas props ou estado
    componentDidUpdate(prevProps, prevState) {

        if(prevState.techs !== this.state.techs) {
            localStorage.setItem('techs', JSON.stringify(this.state.techs))
        }
    }
    // Executado quando o componente deixa de existir
    componentWillMount() {

    }

    handleInputChange = e => {
        console.log(e.target.value)
        this.setState({ newTech: e.target.value})
    }

    handleSubmit = e => {

        e.preventDefault()
        this.setState({
                techs: [... this.state.techs, this.state.newTech],
                newTech: ''
        })
    }

    handleDelete = (index) => {
        this.setState({ techs: this.state.techs.filter((_,i) => i != index)  })
    }

    render() {

     
        return (
            <form onSubmit={this.handleSubmit} >
                <ul>
                    { this.state.techs.map ((tech, index) => (
                    <TechItem 
                        onDelete={ this.handleDelete } 
                        onDelete2={ () => this.handleDelete(index) } 
                        key={index} 
                        tech={tech} 
                        index={index}
                    /> ) ) 
                    }

                
                </ul>
                <input 
                    type="text" 
                    value={this.state.newTech} 
                    onChange={this.handleInputChange}
                />
                <button type="submit">Add</button>
                <p><label>{this.state.newTech}</label></p>

            </form>
        )
    }
}

export default TechList