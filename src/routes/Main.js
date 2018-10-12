import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import Nav1 from "../components/Nav1";
import BookBoard from "../components/Main/BookBoard";

import "../components/Main/CSS/Main.css";

class Main extends Component {
  state = {};

  componentDidMount() {
    this._getUrls();
  }

  componentWillMount() {
    //렌더전에 토큰있는지 확인하는 함수입니다.
    if (!window.localStorage.getItem("token")) {
      //토큰이 없으면
      return <Redirect to="/login" />; //로그인페이지로 리다이렉 합니다.
    }
    console.log("컴포넌트 윌 마운트");
    // this.getDBdata(); 같은 함수.해주기. 밑에 렌더해주려면 필요한 데이터받아오기.
  }

  _renderBooKCoverImage = () => {
    console.log(this.state.coverurl);

    const bookcover = this.state.coverurl.map(url => {
      return <BookBoard url={url.id} author={url.author} key={url.id} />;
    });
    return bookcover;
  };

  _getUrls = async () => {
    const coverurl = await this._callBookCoverAPI();
    console.log(coverurl);
    this.setState({
      coverurl
    });
  };

  _callBookCoverAPI = () => {
    const booklistAPI = "https://picsum.photos/list";
    return axios.get(booklistAPI).then(response => response.data);
  };

  render() {
    return (
      <div className="Main">
        <Nav1 />
        {this.state.coverurl ? this._renderBooKCoverImage() : "Loading"}
      </div>
    );
  }
}

export default Main;
