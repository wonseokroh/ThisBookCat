import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

class BookapiModal extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      show: this.props.showmodal,
      booktitle: ""
    };
  }

  render() {
    console.log(this.props);
    return (
      <div className="modal-container">
        <Modal
          show={this.state.show}
          onHide={() => {
            this.props.handleHide();
          }}
          container={this}
          aria-labelledby="contained-modal-title"
          style={{ display: "flex", alignItems: "center" }}
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">책 검색하기</Modal.Title>
          </Modal.Header>
          <Modal.Body>원하는 도서를 검색해주세요.</Modal.Body>
          <Modal.Footer>
            <Button
              onClick={() => {
                console.log("책이 등록되었습니다.");
                this.props.handleHide();
              }}
            >
              해당 도서 등록하기
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default BookapiModal;
