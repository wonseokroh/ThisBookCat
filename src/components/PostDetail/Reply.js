import React, { Component } from 'react'

export default class Reply extends Component {
  render() {
    return (
      <div className='reply'>
        {/* <p className='reply_username'>{this.props.reply.username} </p>
        <p className='msg'>{this.props.reply.msg} </p> */}

        <span className='reply_username'>{this.props.reply.username} </span>
        <span className='reply_msg'>{this.props.reply.msg} </span>
      </div>
    )
  }
}
