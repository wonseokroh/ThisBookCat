import React, { Component } from "react";
import axios from "axios";
/* import "./MyBooks.css"; */
import { Item } from "../../../node_modules/semantic-ui-react";

class MyBooks extends Component {
  state = {
    mybooks: []
  };
  componentDidMount() {
    axios
      .get("http://localhost:3001/api/post/27", {
        headers: {
          Authorization: `bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1Mzk1MTIwNjUsImV4cCI6MTU0MTU4NTY2NX0.DM2Ci0TWGOzys8JTMis_gwmO4CWzy5woafWaLZ__dws`
        }
      })
      .then(response => {
        console.log("this is data");
        console.log(response.data, "ooooooooooo");
        this.setState({
          mybooks: this.state.mybooks.concat(response.data)
        });
      });
  }

  render() {
    console.log(this.state.mybooks, "gogogogogogogogogogo");
    return (
      <div className="myBooks">
        {this.state.mybooks.map((item, index) => {
          return (
            <div key={index}>
              <h1>Title : {item.title}</h1>
              <h2>Contents: {item.contents}</h2>
              <img src={item.mainImage.preview} alt={index} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default MyBooks;
