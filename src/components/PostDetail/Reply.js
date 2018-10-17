import React, { Component } from "react";
import { Icon } from "semantic-ui-react";
import './Reply.css'

export default class Reply extends Component {

  //일단 이 댓글 id가 몇인지 알아야 함(props로 받아야 할듯.)
  //이 댓글이 대댓글을 가지는지 알아야 함. (get 해와서 state에 설정해야 할듯.)
  state = {
    re_reply: [
      {
        id:'parenid + 123',
        username: '? userid? ',
        comment: '',
      },
    ],
    reply : '',
    re_reply_input: false,
  }

  _showRereplyInput = () => {
    const input = this.state.re_reply_input
    this.setState({re_reply_input : !input})
  }

  _makeRereply = () => {
    // axios.put(댓글, {reply:id, })
    // .then
  }

  componentWillMount(){
    // 댓글에 대댓글 있으면 가져와서 state에 넣기.
  }

  render() {
    return (
      <div className='reply'>
        {/* 댓글쓴사람 사진도 떠야함. TODO:postdetail에서 reply array에  댓글단 사람 img src도 가지고 props로 넘겨줄건지*/}
        {/* <img src={this.props.reply.userimg} className='img-circle' alt={this.props.reply.username} /> */}
        <span className='reply_username'>{this.props.reply.username} </span>
        <span className='reply_msg'>{this.props.reply.msg} </span>
        <span onClick={this._showRereplyInput}>
          <Icon name="pencil alternate" color='grey' fitted size="small" />
        </span>
        {this.state.re_reply_input
          ?
          <div id="rereply">
            <input
              id="rereply_input"
              type="text"
              name="reply"
              placeholder={`@${this.props.reply.username}`}
              />
            <div id="rereply_btn" onClick={'TODO:대댓글서버에보내는함수'}>
              <Icon name="pencil alternate" bordered inverted color='grey' fitted size="small" />
            </div>
          </div>
          : null}
      </div>
    );
  }
}