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
    console.log(files);
    this.props._handleMainImage(files);
    this.setState({
      files: this.state.files.concat(files)
    });
  }; // 올린 사진 파일을 보여주기위해 이컴포넌트에도 저장을 하고, 서버에 보내기 위해 WritePost컴포넌트에도 저장을 합니다.

  render() {
    return (
      <div className="app">
        <ReactDropzone
          className="previewComponent"
          accept="image/*"
          onDrop={this.onPreviewDrop}
        >
          {/* drag n drop을 할 수 있는 라이브러리 입니다. */}
          {this.state.files.length > 0 ? (
            <div className="photoBox">
              <img
                alt="Preview"
                key={this.state.files[this.state.files.length - 1].preview}
                src={this.state.files[this.state.files.length - 1].preview}
                className="bookImage"
              />
              {/* 사용자가 올린 사진을 볼 수 있도록 해주는 부분입니다. */}
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
