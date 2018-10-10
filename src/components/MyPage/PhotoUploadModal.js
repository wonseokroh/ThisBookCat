import React, {Component} from 'react'
import {Modal, Button} from 'react-bootstrap'
import './CSS/PhotoUploadModal.css'

class PhotoUploadModal extends Component {

  _pushImagetoMypage = () => {
    
    let file = document.querySelector('input[type=file]').files[0]

    let reader = new FileReader();

    reader.onload = (e) => {

      this.props.callback(e.target.result);

    }

    reader.readAsDataURL(file);
  }


    render() {
      console.log(this.props)
      return (
          <Modal
            show={this.props.show}
            onHide={this.props.hide}
            container={this}
            aria-labelledby="contained-modal-title">
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title">
              UploadModal
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <div className = 'PhotoUploadModal'>
            <Button>비밀번호변경</Button>
            <input name = '프로필사진등록' type="file" onChange={this._pushImagetoMypage}/>
            <Button>로그아웃하기</Button>
            </div>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.props.hide}>닫기</Button>
            </Modal.Footer>
          </Modal>
      );
    }
  }

  export default PhotoUploadModal