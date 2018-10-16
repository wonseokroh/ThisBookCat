import React, { Component } from 'react'

class Block extends Component {

  state = {
    isClicked:false
  }

_handleClick = (e) => {
  this._toggleBlockStatus();
  this._selectedCallBack(e.target.id)
  
}

_changeCssonClick = () => {
    if(this.state.isClicked===false) {
      return 'white'
    }
    else if(this.state.isClicked===true) {
      return 'aquamarine'
    }
}

_selectedCallBack = (e) => {
  if(!this.state.isClicked) {
    this.props.collect(e) 
  } else {
    this.props.delete(e)
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
      <div className = 'Block' style ={{backgroundColor:this._changeCssonClick()}} id = {this.props.select} onClick={(e)=>{this._handleClick(e)}} key={this.props.key}>
        <h1 className = 'tagName'>{this.props.select}</h1>
      </div>
    )
  }
}

export default Block;