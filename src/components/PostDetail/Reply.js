import React, { Component } from 'react'

export default class Reply extends Component {
  constructor(props){
    super(props);
    this.state={
      re_reply: true,
      reply : '',
      replyclicked:false
    }
    this._makeReply = this._makeReply.bind(this);
  }

 
  _makeReply = () => {
this.setState({
  replyclicked : true
})
  }

  render() {

    return (
      <div className='reply'>
        {/* <p className='reply_username'>{this.props.reply.username} </p>
        <p className='msg'>{this.props.reply.msg} </p> */}

        <span className='reply_username'>{this.props.reply.username} </span>
        <span className='reply_msg' onClick>{this.props.reply.msg} </span>
        <span onClick={this._makeReply}>댓글달기</span>
        {this.state.replyclicked ? <div>@{this.props.reply.username}<input type="text"></input></div> : null}
      </div>
    )
  }
}