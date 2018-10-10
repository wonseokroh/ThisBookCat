import React, {Component} from "react"
import { Link } from 'react-router-dom';

class MyBookBoard extends Component {

    render(){
        return(
            <Link to={`/postdetail/${this.props.image}`}>
            <div className ='BookBoard'>
                <img className = 'likeThumbnail' src = {`https://picsum.photos/300/300?image=${this.props.image}`} alt='bookcover' />
            </div>
            </Link>
        )
    }
}

export default MyBookBoard;