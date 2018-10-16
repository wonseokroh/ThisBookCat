import React, { Component } from "react";
import FollowingPage from "../components/Followings/FollowingPage";
import Nav1 from "../components/Nav1";
import { Grid, Row, Col } from "react-bootstrap";

class Followings extends Component {
  state = {};

  render() {
    return (
      <div>
        <Nav1 />
        <Grid>
          <Row className="show-grid">
            <Col
              xs={12}
              style={{
                display: "flex",
                justifyContent: "center",
                backgroundColor: "khaki"
              }}
            >
              <div
                style={{
                  display: "flex",
                  flex: 1,
                  justifyContent: "center"
                }}
              >
                <FollowingPage />
              </div>
            </Col>
          </Row>
        </Grid>
        {/* <FollowingPage
          lists={this.state.data ? this.state.data : "Loading..."}
        /> */}
      </div>
    );
  }
}

export default Followings;
