import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Icon } from "semantic-ui-react";

class FollowingBoard extends Component {

  render(){
    return(
    <div className ='FollowingBoard'>
    <div className = 'imagePart'>
    <Link to={{
        pathname : `/postdetail/${this.props.url}`,
        state : {
                imgUrl : `https://picsum.photos/300/300?image=${this.props.url}`,
                username : this.props.author,
            }
            }}>
            <img className = 'FollowThumbnail' src = {`https://picsum.photos/400/400?image=${this.props.url}`} alt='bookcover' />
            </Link>
            </div>
    <div className = 'textPart'>
    <p>여기에는 유저별 포스트 글이 간략하게 올라갈 예정입니다!</p>
    </div>
    <div className = 'followFooter'>
            <Icon className = 'heart' name="heart outline" size="big" />
            <h2 className = 'FollowerID'>{this.props.author}</h2></div>
            </div>
    )
}
}
export default FollowingBoard;
