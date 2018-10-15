import React, { Component } from 'react'

class Block extends Component {

  state = {
    isClicked:false
  }


_changeCss = () => {
    if(this.state.isClicked===false) {
      return 'white'
    }
    else if(this.state.isClicked===true) {
      return 'aquamarine'
    }
}

_toggleBlockStatus = () => {
  if(this.state.isClicked===false) {
    console.log('aquamarine')
    this.setState({isClicked:true})
    console.log(this.state.isClicked)
  } else if (this.state.isClicked===true) {
    console.log('white')
    this.setState({isClicked:false})
    console.log(this.state.isClicked)
  }
}

  render() {
    return (
      <div className = 'Block' style ={{backgroundColor:this._changeCss()}} id = {this.props.select} onClick={this._toggleBlockStatus} key={this.props.key}>
        <h1>{this.props.select}</h1>
      </div>
    )
  }
}

export default Block;