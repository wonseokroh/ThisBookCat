import React, { Component } from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Icon } from "semantic-ui-react";
import axios from "axios";
import "./Nav2.css";

class Nav2 extends Component {
  state = {
    url :'ec2-54-180-29-101.ap-northeast-2.compute.amazonaws.com'
  }

  shouldComponentUpdate(nextProps, nextState) {
    for (var key in this.props.posting) {
      if (this.props.posting[key] !== nextProps.posting[key]) {
        return true;
      }
    }
    return false;
  }
  // 새로운 프롭스가 들어오면 즉, 사용자가 글 제목이나 글 내용등을 업데이트 하면 re-render시키는 함수 입니다.
  uploadHandler = files => {
    const formData = new FormData();
    const config = {
      headers: {
          'content-type': 'multipart/form-data',
          'Authorization': `bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTUzOTY1OTQ5MSwiZXhwIjoxNTQxNzMzMDkxfQ.n1h9TPgmN3PHAbpYh7t37GMghqEAG46YG0cL5uCTwS8`
      }
  };    formData.append('imgFile', files[0]);
    axios.post(`http://${this.state.url}:3000/api/mainimage/1`, formData,config, { headers: {
    Authorization: `bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTUzOTY1OTQ5MSwiZXhwIjoxNTQxNzMzMDkxfQ.n1h9TPgmN3PHAbpYh7t37GMghqEAG46YG0cL5uCTwS8`
  }});
  };

  _sendPost = () => {
    console.log(this.props.posting.title);
    axios
      .post(
        `http://${this.state.url}:3000/api/post`,
        {
          title: this.props.posting.title,
          contents: this.props.posting.contents
        },
        {
          headers: {
            Authorization: `bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTUzOTY1OTQ5MSwiZXhwIjoxNTQxNzMzMDkxfQ.n1h9TPgmN3PHAbpYh7t37GMghqEAG46YG0cL5uCTwS8`
          }
        }
      )
      .then(response => {
        const formData = new FormData();
        const config = {
        headers: {
          'content-type': 'multipart/form-data',
          'Authorization': `bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTUzOTY1OTQ5MSwiZXhwIjoxNTQxNzMzMDkxfQ.n1h9TPgmN3PHAbpYh7t37GMghqEAG46YG0cL5uCTwS8`
         }};    
         formData.append('imgFile', this.props.posting.mainimage[0]);
        console.log(response.data, "======");
        axios
          .post(`http://${this.state.url}:3000/api/img/mainimage/${response.data.id}`,formData,config)
          .then(response => {
            console.log(response.data, "this is response data");
            this.props._postSuccess();
          })
          .catch(error => {
            console.log(error);
          });
      })
      .catch(error => {
        console.log(error);
      });
  };
  // 서버에 axios요청을 보내는 부분입니다.
  // 이미지랑 글이랑 보내는 endpoint가 달라서 저렇게 짜 놓았습니다.

  render() {
    console.log(this.props.posting.mainimage[0], "this is props");
    return (
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/main">
              <div className="thisBook">이 책 반 냥</div>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullLeft>
            <NavItem eventKey={1} href="#">
              Draft
            </NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={2} href="#" onClick={this._sendPost}>
              POST
              <Icon name="paper plane outline" size="big" />
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Nav2;