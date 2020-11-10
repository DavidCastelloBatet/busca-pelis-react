import React, { Component } from 'react'

const API_KEY = '6b000c4b'
// link API para datos :  http://www.omdbapi.com/?apikey=[yourkey]&
// link API para posters : http://img.omdbapi.com/?apikey=[yourkey]&


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
        const {inputMovie} = this.state
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`)
            .then(res => res.json())
            .then(results => {
                const { Search=[], totalResults="0" } = results
                this.props.onResults(Search)
                console.log({Search, totalResults})
            })
        
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
