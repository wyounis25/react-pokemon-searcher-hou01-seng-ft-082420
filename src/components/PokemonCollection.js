import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  render() {
    const poke = this.props.filterPokemon
    return (
      <div>
      <h1>Hello From Pokemon Collection</h1>
      <Card.Group itemsPerRow={6}>
       {poke.map(pokemon => {
         return <PokemonCard name={pokemon.name} hp={pokemon.hp} img={pokemon.sprites}/>
        })} 
      </Card.Group>

      </div>
    )
  }
}

export default PokemonCollection
