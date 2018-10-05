import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  Image,
  FormControl,
  FormGroup,
  Button
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { Icon } from "semantic-ui-react";
import "./Nav1.css";

class Nav1 extends Component {
  render() {
    return (
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/main">
              <Image className="nav-logo" />이 책 반 냥
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Navbar.Form pullLeft>
            <FormGroup>
              <FormControl type="text" placeholder="Search Books" />
            </FormGroup>
            <Button type="submit">
              <Icon name="search" size="large" />
            </Button>
          </Navbar.Form>
          <Nav pullRight>
            <NavItem eventKey={2} href="/main">
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
