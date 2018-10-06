import React, { Component } from "react";
import Nav2 from "../components/Nav2";
import Thumbnail from "../components/WritePost/Thumbnail";
import { Grid, Row, Col } from "react-bootstrap";
import Bookapi from "../components/WritePost/Bookapi";

class WritePost extends Component {
  render() {
    return (
      <div>
        <Nav2 />
        <Grid>
          <Row className="show-grid">
            <Col
              xs={12}
              style={{
                display: "flex",
                justifyContent: "center",
                height: "400px"
              }}
            >
              <div
                style={{
                  display: "flex",
                  flex: "0.5",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Thumbnail />
              </div>
              <div
                style={{
                  display: "flex",
                  flex: "0.5",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Bookapi />
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default WritePost;
