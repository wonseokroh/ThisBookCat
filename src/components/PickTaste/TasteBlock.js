import React, { Component } from 'react'
import './CSS/TasteBlock.css'

class TasteBlock extends Component {
  render() {
    return (
      <div className = 'taste' id = {this.props.taste}>
        <h1>{this.props.taste}</h1>
      </div>
    )
  }
}

export default TasteBlock;

