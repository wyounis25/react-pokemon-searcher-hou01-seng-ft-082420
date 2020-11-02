import React, { Component } from 'react'

import PokemonPage from './components/PokemonPage'
import './App.css'


export class App extends Component {

state =  {
  allPokemon: [],
  searchPokemon: ""
}



componentDidMount = () => {

  fetch("http://localhost:3000/pokemon").then(res => res.json()).then(pokemon => {
    this.setState({
      allPokemon: pokemon,
    })
  })
}

  

  setName = (e) => {
    console.log(e.target.value)
    this.setState({
      searchPokemon: e.target.value 
    })
  }






  addNewPokemon = (newPokemon) => {
    fetch("http://localhost:3000/pokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        Accept: "application/json;charset=utf-8",
      },
      body: JSON.stringify(newPokemon)
    }).then(res => res.json()).then(pokemon => {
      this.setState({
        allPokemon: [...this.state.allPokemon, pokemon]
      })
    })
  }
  

  render() {
    const filterSearch = this.state.allPokemon.filter(pokemon => {
      return pokemon.name.toLowerCase().includes(this.state.searchPokemon.toLowerCase())
    })
    return (
      <div>
    <PokemonPage
    // YOU PASS STATE DATE
     pokemons={this.state.allPokemon}
     newPoke={this.addNewPokemon}
     // HOW YOU PASS A FUNCTION 
     set={this.setName}
     //THIS HOW YOU PASS A VARIABLE DATA 
     filterPokemon={filterSearch}
     />
      </div>
    )
  }
}

export default App
