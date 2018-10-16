import React, { Component } from "react";
import Nav1 from "../components/Nav1";
import MyBooks from "../components/MyPage/MyBooks";

import MyPageProFile from "../components/MyPage/MyPageProFile";

import "../components/MyPage/CSS/MyPage.css";

class MyPage extends Component {
  render() {
    return (
      <div className="MyPage">
        <Nav1 />
        <div>
          <MyPageProFile />
        </div>
        <div style={{ margin: "20px" }}>
          <MyBooks />
        </div>
      </div>
    );
  }
}

export default MyPage;