import React, { Component } from "react";
import { Redirect } from 'react-router-dom';

class Main extends Component {

  componentWillMount(){
    //렌더전에 토큰있는지 확인하는 함수입니다.
    if (!window.localStorage.getItem('token')) { //토큰이 없으면
      return <Redirect to ='/login'/>; //로그인페이지로 리다이렉 합니다.
    }
    console.log('컴포넌트 윌 마운트')
    // this.getDBdata(); 같은 함수.해주기. 밑에 렌더해주려면 필요한 데이터받아오기.
  }

  render() {
    return (
      <div>
        {console.log(this.props)}
        this is main
      </div>
    );
  }
}

export default Main;
