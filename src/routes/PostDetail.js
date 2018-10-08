import React, { Component } from "react";
import '../components/PostDetail/CSS/PostDetail.css'

class PostDetail extends Component {
  render() {
    const photoID = this.props.match.params.id
    return <div className = 'detailPhoto'>
      <img className = 'likeDetailPhoto' src = {`https://picsum.photos/400/400?image=${photoID}`} alt = {photoID}/>
    </div>;
  }
}

export default PostDetail;
