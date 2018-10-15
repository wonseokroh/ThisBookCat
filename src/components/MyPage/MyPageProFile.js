import React, {Component} from "react"
import { Icon } from "semantic-ui-react";
import axios from 'axios'
import PhotoUploadModal from './PhotoUploadModal'
import MyBookBoard from './MyBookBoard'

class MyPageProFile extends Component {

    constructor(props, context) {

        super(props, context);
    
        this.state = {
          show: false,
          author: 'Alejandro Escamilla',
          counter:0,
          ProfileImage:''
        };
      }

      componentDidMount() {
        this._getIamges()
      }

      _handleHide = () => {
        this.setState({ show: false });
      }

      _getImageFromModal = (image) => {
        this.setState({
          ProfileImage:image
        })
      }

      _renderImages = () => {
      const images = this.state.images.map((url) => {
          if(this.state.author===url.author) {
            return <MyBookBoard url={url.id} author={url.author} key={url.id}/>
          }
          return images
      })
      console.log(this.state.images)
      return images
    }
    
    _getIamges = async () => {
      const images = await this._callImageAPI()
      console.log(images)
      this.setState({
          images: images
      })
    }

    _callImageAPI = () => {
      const imagelistAPI = "https://picsum.photos/list"
      return axios.get(imagelistAPI)
      .then(response => response.data)
    }

    render() {
      console.log(this.state.ProfileImage)
        return(
            <div className = 'MyPageProFile'>
            <div className = 'ProFilePhotoContainer'>
            <img className = 'ProfilePhoto' src = {this.state.ProfileImage} alt =''/>
            </div>
            <div className = 'ProFileDetail'>
            <span className = 'ID_user'>{this.state.author}</span>
            <span className = 'PostNumber'>{this.state.counter}개</span>
            <span className = 'Follower'>팔로워 200</span>
            <Icon name="cog" size="big" className = 'custom-icon' onClick={() => this.setState({ show: true })}/>
            </div>
            <PhotoUploadModal show = {this.state.show} hide = {this._handleHide} callback = {this._getImageFromModal}/>
            {this.state.images?this._renderImages():'Loading'}
            </div>
        )
    }

}

export default MyPageProFile