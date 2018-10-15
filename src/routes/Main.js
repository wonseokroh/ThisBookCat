import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import Nav1 from "../components/Nav1";
import BookBoard from "../components/Main/BookBoard";

import "../components/Main/CSS/Main.css";

class Main extends Component {
  state = {
    items: 20,
    coverurl:''
  };

  componentDidMount() {
    this._getUrls()
    window.addEventListener('scroll', this._infiniteScroll, true)
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

   _infiniteScroll = () => {
    let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);

    let scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop);

    let clientHeight = document.documentElement.clientHeight;
    
    if(scrollTop + clientHeight === scrollHeight) {
      this.setState({
        items:this.state.items+20
      })
      console.log(this.state.items)
      this._getUrls()
    }
  }

  _renderBooKCoverImage = () => {
    if(this.state.coverurl) {
      const bookcover = this.state.coverurl.map((url, index) => {
        if(index<this.state.items) {
          return <BookBoard url={url.id} author={url.author} key={url.id} />;
        }
      });
      return bookcover;
    }
    return "Loading"
  };

  _getUrls = async () => {
    const coverurl = await this._callBookCoverAPI();
    this.setState({
      coverurl
    })
  };

  _callBookCoverAPI = () => {
    const booklistAPI = "https://picsum.photos/list";
    return axios.get(booklistAPI).then(response => response.data)
    .then((response) => {
      let newArray = []
      response.forEach( (element, index) => {
        if(index < this.state.items) {
          newArray.push(element)
        }
      })
      return newArray
    })
  };

  render() {
    return (
      <div className="Main">
        <Nav1/>
        {this._renderBooKCoverImage()}
      </div>
    );
  }
}
export default Main;

  /* _infiniteScroll = () => {
    let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);

    let scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop);

    let clientHeight = document.documentElement.clientHeight;
    
    if(scrollTop + clientHeight === scrollHeight) {
      this.setState({
        items:this.state.items+20
      })
    }
 } */
//모든 사진데이터에서 일부 뽑아내서 보여주는 infinite scroll 함수//


