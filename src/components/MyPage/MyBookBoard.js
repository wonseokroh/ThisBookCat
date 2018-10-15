import React, {Component} from "react"
import { Link } from 'react-router-dom';

import './MyBookBoard.css'

class MyBookBoard extends Component {

    render(){
        console.log(this.props)
        return(
            <Link to={{
                pathname : `/postdetail/${this.props.url}`,
                state : {
                    imgUrl : `https://picsum.photos/300/300?image=${this.props.url}`,
                    username : this.props.author,
                }
            }}>
                <div className ='MyBookBoard'>
                    {console.log('BookBoard component에서 this.props 찍는중', this.props)}
                    <img className = 'likeThumbnail' src = {`https://picsum.photos/300/300?image=${this.props.url}`} alt='bookcover' />
                </div>
            </Link>

           // <Link to={`/postdetail/${this.props.url}`}>
           //     <div className ='BookBoard'>
           //         <img className = 'likeThumbnail' src = {`https://picsum.photos/300/300?image=${this.props.url}`} alt='bookcover' /> */}
           //     </div>
           // </Link>
        )
    }
}

export default MyBookBoard;