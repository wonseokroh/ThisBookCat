import React, { Component } from "react";
import Nav1 from "../components/Nav1";
import MyPageProFile from "../components/MyPage/MyPageProFile"

import '../components/MyPage/CSS/MyPage.css'

class MyPage extends Component {

  render() {
    return (
      <div className = 'MyPage'>
      <Nav1/>
      <MyPageProFile/>
      </div>
     
    )
  }
}

export default MyPage;
