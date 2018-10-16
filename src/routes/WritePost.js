import React, { Component } from "react";
import Nav2 from "../components/Nav2";
import { Redirect } from "react-router-dom";
import Thumbnail from "../components/WritePost/Thumbnail";
import { Grid, Row, Col } from "react-bootstrap";
import Bookapi from "../components/WritePost/Bookapi";
import MyEditor from "../components/WritePost/MyEditor";

class WritePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainimage: [],
      title: "",
      hello: "",
      contents: "",
      posted: false
    };
  }

  _handleMainImage = file => {
    this.setState({
      mainimage: this.state.mainimage.concat(file)
    });
  }; // 대표이미지를 등록하고 변경할 때 사용하는 함수입니다.

  _handleTitle = e => {
    this.setState({
      title: e.target.value
    });
  }; // 제목을 등록할때 사용하는 함수 입니다.

  _handleContents = contents => {
    setTimeout(() => {
      this.setState({
        contents: contents
      });
    });
  }; // 글 내용을 저장하는 함수입니다. setTimeout을 사용하여야 라이브러리에서 정해놓은 설정을 피할 수 있습니다.

  _postSuccess = () => {
    this.setState({
      posted: true
    });
  }; // 글이 제대로 저장되면 true를 반환하여 페이지를 리다이렉트 시킵니다.

  render() {
    console.log(this.state.mainimage, this.state.title, this.state.contents);
    console.log(this.state.posted, "this is posted");
    return this.state.posted ? (
      <Redirect to="/mypage" /> // 글이 저장되면 마이페이지로 리다이렉트하는 부분입니다.
    ) : (
      <div>
        <Nav2
          _postSuccess={this._postSuccess}
          posting={{
            mainimage: this.state.mainimage,
            title: this.state.title,
            contents: this.state.contents
          }}
        />
        {/* 악시오스 요청을 네브바에서 보냅니다. 네브바에 버튼이 존재하므로 -> 그래서 네브바에 글 제목과 글 내용, 대표이미지를 props로 내려줍니다. */}
        <Grid>
          {/* react-bootstrap Grid를 사용해서 layout짠 부분입니다. */}
          <Row className="show-grid">
            <Col
              xs={12}
              style={{
                display: "flex",
                justifyContent: "center",
                height: "400px"
              }}
            >
              <div
                style={{
                  display: "flex",
                  flex: "0.5",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Thumbnail _handleMainImage={this._handleMainImage} />
                {/* 대표이미지를 업로드하는 부분입니다. */}
              </div>
              <div
                style={{
                  display: "flex",
                  flex: "0.5",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Bookapi />
                {/* 버튼을 누르면 모달창이 띄워지고 api연결해서 책 검색하는 컴포넌트 입니다. */}
              </div>
            </Col>
          </Row>
          <Row className="show-grid">
            <Col xs={12} style={{ display: "flex" }}>
              <div
                style={{
                  display: "flex",
                  flex: "1",
                  marginTop: "30px"
                }}
              >
                <MyEditor
                  _handleTitle={this._handleTitle}
                  _handleContents={this._handleContents}
                />
                {/* 글 쓰는 부분입니다. */}
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default WritePost;
