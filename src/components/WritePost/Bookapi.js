import React, { Component } from "react";
import { Icon } from "semantic-ui-react";
import BookapiModal from "./BookapiModal";
import "./Bookapi.css";

class Bookapi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showmodal: false,
      booktitle: ""
    };
    this._handleHide = this._handleHide.bind(this);
    this._handleBook = this._handleBook.bind(this);
  }

  _handleHide() {
    this.setState({
      showmodal: false
    });
  }

  _handleBook(data) {
    this.setState({
      booktitle: data
    });
  }

  render() {
    return (
      <div className="bookApi">
        {this.state.showmodal ? (
          <BookapiModal
            showmodal={this.state.showmodal}
            handleHide={this._handleHide}
            handleBook={this._handleBook}
          />
        ) : null}
        <div
          className="searchBook"
          onClick={() => {
            this.setState({ showmodal: true });
          }}
        >
          <Icon name="book" size="huge" />
          <div
            style={{
              display: "flex"
            }}
          >
            <h1>책 검색하기</h1>
          </div>
        </div>
        <div style={{ flex: "0.2" }}>
          {this.state.booktitle ? (
            <h1>책 제목 : {this.state.booktitle}</h1>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Bookapi;
