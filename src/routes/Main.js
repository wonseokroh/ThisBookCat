import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import Nav1 from "../components/Nav1";
import BookBoard from "../components/Main/BookBoard";

import "../components/Main/CSS/Main.css";

class Main extends Component {
  state = {
    items: 20,
    preItems: 0,
    preCoverUrl:'',
    coverurl:''
  };

  componentDidMount() {
    this._getUrls()
    window.addEventListener('scroll', this._infiniteScroll, true)
  }

   _infiniteScroll = () => {
    let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);

    let scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop);

    let clientHeight = document.documentElement.clientHeight;
    
    if(scrollTop + clientHeight === scrollHeight) {
      console.log(this.state.coverurl)
      if(!this.state.preCoverUrl) {
        this.setState({preCoverUrl:this.state.coverurl})
      } else if (this.state.preCoverUrl) {
        this.setState({preCoverUrl:this.state.preCoverUrl.concat(this.state.coverurl)})
        console.log(this.state.preCoverUrl)
      }
      this.setState({
        preItems: this.state.items,
        items: this.state.items+20,
      })
      console.log(this.state.preItems)
      console.log(this.state.items)
      console.log(this.state.coverurl)
    }
    this._getUrls()
  }

  _renderPreBooKCoverImage = () => {
    if(this.state.preCoverUrl) {
      const bookcover = this.state.preCoverUrl.map((url) => {
        return <BookBoard url={url.id} author={url.author} key={url.id} />;
      });
      return bookcover;
    }
  };

  _renderBooKCoverImage = () => {
    if(this.state.coverurl) {
      const bookcover = this.state.coverurl.map((url, index) => {
        if(this.state.preItems<index<this.state.items) {
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
    return axios.get(booklistAPI)
    .then((response) => {
      console.log(response.data)
      let result = response.data.slice(this.state.preItems,this.state.items)
      console.log(result)
      return result;
      })
  };

  render() {
    //토큰이 없으면 로그인 페이지로 가라.
   /*  if(!window.localStorage.getItem("token")){
      return <Redirect to="/login" />
    }else{ */
    return (
      <div className="Main">
        <Nav1/>
        {this._renderPreBooKCoverImage()}
        {this._renderBooKCoverImage()}
      </div>
    );
  }}
/* } */
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