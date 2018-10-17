import React, { Component, Fragment } from "react";
import FollowingBoard from "../components/Followings/FollowingBoard";
import Nav1 from "../components/Nav1";
import axios from 'axios'

import "../components/Followings/CSS/Followings.css"

class Followings extends Component {

  state = {
    items: 20
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
      this.setState({
        items:this.state.items+20
      })
    }
  }

  _renderFollowingPost = () => {
    console.log(this.state.followurl)
    if(this.state.followurl) {
      const follow = this.state.followurl.map((url, index) => {
        if(index<this.state.items) {
          return <FollowingBoard url={url.id} author={url.author} key={url.id} />;
        }
      });
      return follow;
    }
    return "Loading"
  };

  _getUrls = async () => {
    const followurl = await this._callBookCoverAPI();
    this.setState({
      followurl
    })
    console.log(this.state.followurl)
  };

  _callBookCoverAPI = () => {
    const booklistAPI = "https://picsum.photos/list";
    return axios.get(booklistAPI).then( response => response.data)
  };

  render() {
    return (
      <Fragment>
         <Nav1/>
         <div className="Followings">
         <div className = 'gridOne'></div>
         <div className = 'gridTwo'>
         {this._renderFollowingPost()}
         </div>
         <div className = 'gridThree'></div>
        
         </div>
      </Fragment>
     
    );
  }
}

export default Followings;

/* _infiniteScroll = () => {
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
} */

  /* _renderPreBooKCoverImage = () => {
    if(this.state.preCoverUrl) {
      const bookcover = this.state.preCoverUrl.map((url) => {
        return < url={url.id} author={url.author} key={url.id} />;
      });
      return bookcover;
    }
  }; */


