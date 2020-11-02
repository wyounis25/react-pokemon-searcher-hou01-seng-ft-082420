import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm newPokemon={this.props.newPoke}/>
        <br />
        <Search pokeSearch={this.props.newSearch}/>
        <br />
        <PokemonCollection 
        pokemons={this.props.pokemons}
        filterPokemon={this.props.filterPokemon}/>
      </Container>
    )
  }
}

export default PokemonPage
