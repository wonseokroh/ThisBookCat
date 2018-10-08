import React, { Component } from "react";
import axios from 'axios'
import Nav1 from "../components/Nav1";
import BookBoard from "../components/Main/BookBoard"

import '../components/Main/CSS/Main.css'

class Main extends Component {
  
  state = {}

  componentDidMount () {
    this._getUrls()
  }

  _renderBooKCoverImage = () => {
    console.log(this.state.coverurl)

    const bookcover = this.state.coverurl.map((url) => {
        return <BookBoard url={url.id} author={url.author} key={url.id}/>
    })
    return bookcover
  }

  _getUrls = async () => {
    const coverurl  = await this._callBookCoverAPI()
    console.log(coverurl)
    this.setState({
      coverurl
    })
  }
  
  _callBookCoverAPI = () => {
    const booklistAPI = "https://picsum.photos/list"
    return axios.get(booklistAPI)
    .then(response => response.data)
  }
  
  render() {
    return (
      <div className='Main'>
        <Nav1 />
        {this.state.coverurl?this._renderBooKCoverImage():'Loading'}
      </div>
    );
  }
}

export default Main;
