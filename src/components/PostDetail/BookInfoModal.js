import React, { Component } from 'react'
import {Modal, Button} from 'react-bootstrap'
import './BookInfoModal.css'
export default class BookInfoModal extends Component {
    render() {
      console.log(this.props)
      return (
        <div>
        <Modal
            show={this.props.show}
            onHide={this.props.hide}
            container={this}
            aria-labelledby="contained-modal-title">
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title">
              Book info
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className = 'PhotoUploadModal'>
                안녕하세요. 책정보 띄울 모달입니다.
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.props.hide}>닫기</Button>
            </Modal.Footer>
          </Modal>
        </div>

      );
    }
}

