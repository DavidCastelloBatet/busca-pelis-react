import React, { Component } from 'react'

export  class SearchForm extends Component {
    state = {
        inputMovie: ''
    }

    _handleChange = (e) => {
        this.setState({inputMovie: e.target.value})
        console.log( e.target.value )
    }

    _handleSubmit = (e) => {
        e.preventDefault()
        alert(this.state.inputMovie)

    }
    render() {
        return (
            <form onSubmit={this._handleSubmit}>
                <div className="field has-addons">
                    <div className= "control">
                        <input 
                            className="input" 
                            onChange={this._handleChange}
                            type="text" 
                            placeholder="Peli a buscar..." 
                        />
                    </div>
                    <div className="control">
                        <button className="button is-info">Buscar</button>
                    </div>
                </div>
            </form>
        )
    }
}
