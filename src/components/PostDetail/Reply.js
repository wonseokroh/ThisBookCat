import React, { Component } from 'react'

export default class Reply extends Component {
  state = {
    re_reply: true,
    reply : '',
  }

  _makeReply = () => {
    console.log('')
  }

  render() {

    return (
      <div className='reply'>
        {/* <p className='reply_username'>{this.props.reply.username} </p>
        <p className='msg'>{this.props.reply.msg} </p> */}

        <span className='reply_username'>{this.props.reply.username} </span>
        <span className='reply_msg' onClick>{this.props.reply.msg} </span>
      </div>
    )
  }
}
