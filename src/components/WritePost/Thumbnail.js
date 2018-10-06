import React, { Component } from "react";
import "./Thumbnail.css";
import { Icon } from "semantic-ui-react";

class Thumbnail extends Component {
  render() {
    return (
      <div className="photoBox">
        <div style={{ marginBottom: "15px" }}>
          <h2>대표 사진을 올려주세요</h2>
        </div>
        <div>
          <Icon name="plus circle" size="huge" />
        </div>
      </div>
    );
  }
}

export default Thumbnail;
