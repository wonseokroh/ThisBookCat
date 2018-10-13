import React, { Component } from "react";
// import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "./MyEditor.css";
import ReactQuill from "react-quill";
import windowScrollPosition from "window-scroll-position";
// import draftToHtml from "draftjs-to-html";
// import htmlToDraft from "html-to-draftjs";

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
    this._handleScroll = this._handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this._handleScroll);
  }

  _handleScroll() {
    var value = windowScrollPosition().top;
    this.setState({
      scrollTop: value
    });
  }

  _handleTitleChange(e) {
    this.setState({
      title: e.target.value
    });
  }

  handleChange(html) {
    console.log(this.state.editorHtml);
    this.setState({ editorHtml: html });
  }

  render() {
    // const { editorState } = this.state;
    // var contentState = editorState.getCurrentContent();
    // const rawDraftContentState = JSON.stringify(convertToRaw(contentState)); //DB에 저장할 부분
    // console.log(rawDraftContentState);
    console.log(this.state.scrollTop, "this is scroll");
    return (
      <div className="Write-container">
        <div style={{ marginLeft: -20 }}>
          <form>
            <input
              className="title"
              type="text"
              placeholder="Title"
              onChange={this._handleTitleChange}
            />
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
