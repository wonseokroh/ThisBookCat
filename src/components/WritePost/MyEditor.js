import React, { Component } from "react";
import { Editor } from "react-draft-wysiwyg";
import "./MyEditor.css";
import axios from "axios";
import ReactQuill from "react-quill";
import windowScrollPosition from "window-scroll-position";

export default class MyEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // editorState: EditorState.createEmpty(),
      files: [],
      editorHtml: "",
      theme: "snow",
      title: "",
      scrollTop: 0
    };
    this.handleChange = this.handleChange.bind(this);
    // this._handleScroll = this._handleScroll.bind(this);
  }

  // componentDidMount() {
  //   window.addEventListener("scroll", this._handleScroll);
  // }

  // _handleScroll() {
  //   var value = windowScrollPosition().top;
  //   this.setState({
  //     scrollTop: value
  //   });
  // }

  handleChange(html) {
    this.props._handleContents(html); // 이 부분은 WritePost파일에서 state를 변경해주기 위해 사용하는 함수입니다.
    this.setState({ editorHtml: html });
  } // 글을 저장하는 함수입니다.

  render() {
    return (
      <div className="Write-container">
        <div style={{ marginLeft: -20 }}>
          <form>
            <input
              className="title"
              type="text"
              placeholder="Title"
              onChange={this.props._handleTitle}
            />
            {/* 제목을 쓰는 form입니다.*/}
          </form>
        </div>
        <div>
          <div className="RichEditor-root">
            <ReactQuill
              theme={this.state.theme}
              onChange={this.handleChange}
              value={this.state.editorHtml}
              modules={Editor.modules}
              formats={Editor.formats}
              bounds={".app"}
              placeholder="Tell your story!"
            />
            {/* 이 부분은 텍스트 에디터 부분입니다. */}
          </div>

          {/* <textarea
            disabled
            value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
          /> */}
        </div>
      </div>
    );
  }
}

Editor.modules = {
  toolbar: [
    [{ header: 1 }, { header: 2 }], // custom button values
    ["bold", "italic", "underline", "strike"], // toggled buttons
    ["blockquote"],

    [{ list: "ordered" }, { list: "bullet" }],
    [{ indent: "-1" }, { indent: "+1" }], // outdent/indent

    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ align: [] }],
    ["link", "image", "video"],
    ["clean"]
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false
  }
};
// 텍스트 에디터에서 사용하는 항목들 입니다.

Editor.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "color",
  "background",
  "align",
  "image",
  "video"
];
