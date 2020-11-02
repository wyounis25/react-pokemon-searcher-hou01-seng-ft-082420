import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    display: true 
  }
  filpimg = () => {
    const flip = !this.state.display

    this.setState({
      display: flip
    })
  }

  render() {
    const front = this.props.img.front
    const back = this.props.img.back
    return (
      <Card>
        <div>
          <div onClick={this.filpimg} className="image">
           {this.state.display?<img src = {front} alt="oh no!" /> : <img src = {back} alt="oh no!" /> } 
          </div>
          <div className="content">
            <div className="header">{this.props.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
