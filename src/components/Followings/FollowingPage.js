import React, { Component } from 'react'

class FollowingPage extends Component {
  render() {
    console.log(this.props.lists[0]) //render가 두번 된다. 앞에서 didMount가 있어서 state가 한번 바뀌며 re render되므로
      return (
        <div>
          <p>{this.props.lists[0].title}</p>
          <img src={this.props.lists[0].url} alt=""/>
          <h1>data came from Followings</h1>
        </div>
    )
  }
}


export default FollowingPage