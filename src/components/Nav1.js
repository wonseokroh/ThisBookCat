import React, { Component } from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Icon, Input } from "semantic-ui-react";
import "./Nav1.css";

class Nav1 extends Component {
  render() {
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
          <Navbar.Form pullLeft>
            <Input action={{ icon: "search" }} placeholder="Search..." />
          </Navbar.Form>
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
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Nav1;
