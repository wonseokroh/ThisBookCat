import React, { Component } from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Link, Redirect} from "react-router-dom";
import { Icon, Input } from "semantic-ui-react";
import "./Nav1.css";

class Nav1 extends Component {
  state={
    isLogin: true,
  }

  _logout = (e) => {
    e.preventDefault();
    window.localStorage.removeItem('token');
    this.setState({isLogin: false})
  }

  render() {
    if(!this.state.isLogin){
      return <Redirect to ='/login' />;
    }else{
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
          <form>
            <input placeholder="(예: 힐링, 자기계발, 칼세이건...)"/>
            <button><Icon name="lemon" size="large" fitted color="yellow"/></button>
          </form>
          {/* <Navbar.Form pullLeft>
            <Input action={{ icon: "search" }} placeholder="(예: 힐링, 자기계발, 칼세이건...)" />
          </Navbar.Form> */}
          <Nav pullRight>
            <NavItem eventKey={2} href="/followings">
              <Icon name="tags" size="big" />
            </NavItem>
            <NavItem eventKey={2} href="/mylike">
              <Icon name="heart outline" size="big" />
            </NavItem>
            <NavItem eventKey={2} href="/writepost">
              <Icon name="pencil" size="big" />
            </NavItem>
            <NavItem eventKey={2} href="/mypage">
              <Icon name="user circle" size="big" />
            </NavItem>
            <NavItem eventKey={2} >
              <Icon name="log out" size="big" onClick={this._logout} />
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }}
}

export default Nav1;
