import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./routes/Login";
import SignUp from "./routes/SignUp";
import FindPw from "./routes/FindPw";
import ResetPw from "./routes/ResetPw";
import PickTaste from "./routes/PickTaste";
import Main from "./routes/Main";
import MyLike from "./routes/MyLike";
import Followings from "./routes/Followings";
import WritePost from "./routes/WritePost";
import PostDetail from "./routes/PostDetail";
import MyPage from "./routes/MyPage";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className = 'App'>
        <Router>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
            <Route path="/findpw" component={FindPw} />
            <Route path="/resetpw" component={ResetPw} />
            <Route path="/picktaste" component={PickTaste} />
            <Route path="/main" component={Main} />
            <Route path="/mylike" component={MyLike} />
            <Route path="/followings" component={Followings} />
            <Route path="/writepost" component={WritePost} />
            <Route path="/postdetail" component={PostDetail} />
            <Route path="/mypage" component={MyPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
