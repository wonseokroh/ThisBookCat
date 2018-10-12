import React, { Component } from "react";
import "./Thumbnail.css";
import { Icon } from "semantic-ui-react";
import ReactDropzone from "react-dropzone";

class Thumbnail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      files: []
    };
  }

  onPreviewDrop = files => {
    this.setState({
      files: this.state.files.concat(files)
    });
  };

  render() {
    console.log(this.state.files);
    return (
      <div className="app">
        <ReactDropzone
          className="previewComponent"
          accept="image/*"
          onDrop={this.onPreviewDrop}
        >
          {this.state.files.length > 0 ? (
            <div className="photoBox">
              <img
                alt="Preview"
                key={this.state.files[this.state.files.length - 1].preview}
                src={this.state.files[this.state.files.length - 1].preview}
                className="bookImage"
              />
            </div>
          ) : (
            <div className="photoBox">
              <h2>대표 사진을 올려주세요</h2>
              <Icon name="plus circle" size="huge" />
            </div>
          )}
        </ReactDropzone>
      </div>
    );
  }
}

export default Thumbnail;
