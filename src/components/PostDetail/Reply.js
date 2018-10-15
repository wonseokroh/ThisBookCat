import React, { Component } from "react";

export default class Reply extends Component {
  state = {
    re_reply: true,
    reply: ""
  };

  _makeReply = () => {};

  render() {
    return (
      <div>
        <div className="reply">
          {/* <p className='reply_username'>{this.props.reply.username} </p>
          <p className='msg'>{this.props.reply.msg} </p> */}

          <span className="reply_username">{this.props.reply.username} </span>
          <span className="reply_msg">{this.props.reply.msg} </span>
          <span className="reply_make_rereply" onClick={this._makeReply}>
            댓글달기
          </span>
          {/* 댓글달기를 누르면 바로 밑에 input 이 생기도록 (like facebook) */}
          <input placeholder={this.props.reply.username} />
        </div>
      </div>
    );
  }
}
