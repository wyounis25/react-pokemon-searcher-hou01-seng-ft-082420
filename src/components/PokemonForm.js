import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {


  state = {
    name: '',
    hp: 0,
    sprites: {
      front: '',
      back: ''
    }
  
  }
  
  setValue = (e) => {
    e.preventDefault()
    const name = e.target.name;
  if (name === 'front' || name === 'back') {
    this.setState({
      sprites: {
        ...this.state.sprites,
        [name]: e.target.value
      }
    });
  } else {
    this.setState({
      [name]: e.target.value
    });
  }
  }


  submitNewPoke = (e) => {
    e.preventDefault()
    this.props.newPokemon(this.state)
  }

  render() {
    
    return (
      <div>
        <h3>Add a Pokemon!</h3> 
        <Form onSubmit={(e)=>this.submitNewPoke(e)}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={this.setValue}/>
            <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={this.setValue} />
            <Form.Input fluid label="Front Image URL" placeholder="url" name="front" onChange={this.setValue}/>
            <Form.Input fluid label="Back Image URL" placeholder="url" name="back" onChange={this.setValue}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}
export default PokemonForm
