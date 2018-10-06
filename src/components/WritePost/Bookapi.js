import React, { Component } from "react";
import { Icon } from "semantic-ui-react";
import BookapiModal from "./BookapiModal";

class Bookapi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showmodal: false
    };
    this._handleHide = this._handleHide.bind(this);
  }

  _handleHide() {
    this.setState({
      showmodal: false
    });
  }

  render() {
    return (
      <div>
        {this.state.showmodal ? (
          <BookapiModal
            showmodal={this.state.showmodal}
            handleHide={this._handleHide}
          />
        ) : null}
        <div
          style={{ display: "flex" }}
          onClick={() => {
            this.setState({ showmodal: true });
          }}
        >
          <Icon name="book" size="huge" />
          <div style={{ display: "flex", alignItems: "center" }}>
            <h1>책 검색하기</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Bookapi;
