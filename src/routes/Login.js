import React, { Component } from "react";
// import Nav1 from "../components/Nav1";
import '../components/Login/Login.css';
import { Icon } from "semantic-ui-react";
import { Link, Redirect } from "react-router-dom";
import axios from 'axios';

class Login extends Component {
  state = {
    email : '',
    password : '',
    isLogin : false,
  }

  _setEmail = (e) => {
    console.log('Login.js의 setEmail함수입니다. e.target.value 찍는중', e.target.value)
    this.setState({email : e.target.value});
  }

  _setPassword = (e) => {
    console.log('Login.js의 setPw함수입니다. e.target.value 찍는중', e.target.value)
    this.setState({password : e.target.value});
  }

  _handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login.js의 handleSubmit함수입니다. this.state 찍는중', this.state)
    
    const user = {
      email : this.state.email,
      password : this.state.password
    };  //TODO: Login Post 요청 날릴때 어떤 형식으로 보내줘야 하는지. user 객체처럼 보내주면 되나? 

    axios.post(``, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);//?
        return res.json();//?
      })
      .then(data => {
        if(data.token){ //data에 토큰이 있으면 == 로그인이 됐으면, 
          window.localStorage.setItem('token', data.token)
          // TODO:토큰 심어주기
          // TODO: 토큰 심어주기만 하면 isLogin state 필요없나? 필요없으면 없애자
          this.setState({isLogin : true})
        }else{
          // 로그인 실패했다는 신호가 나오면, TODO:이메일 비밀번호가 일치하지 않습니다.
          // alert창? 띄우기? 아니면 그 메세지div만 추가? 아니면 새로운 간단한 페이지?
        }
      })

  }

  render() {
    // TODO: 서버랑 통신되면 여기 주석 풀기
    // if(window.localStorage.getItem('token')){
    //   return <Redirect to ='/' />;
    // }else{
      return (
        <div className='login_container' >
          <div className='login_container_1'>
            <div className='login_container_2'>
            <h5>책, 콘텐츠를 모두와 공유하기</h5>
            <h1>이책반냥<Icon name="paw" size="small" /></h1>
            <h3>이책반냥에 오신 것을 환영합니다.</h3>
            </div>
            <form onSubmit={this._handleSubmit}>
              <div><input className='login_input' type="email" placeholder="이메일을 입력해주세요" onChange={this._setEmail}></input></div>
              <div><input className='login_input' type="password" placeholder="비밀번호를 입력해주세요" onChange={this._setPassword}></input></div>
              <div><button type='submit' className='login_btn'>계속하기</button></div>
            </form>
            
            <h5>또는</h5>
            {/* <div><button className='login_btn'>FACEBOOK으로 계속하기</button></div> */}
            <div><button className='login_btn'>GOOGLE로 계속하기</button></div>
            <div className='login_privacy'>{`계속하면 이책반냥 서비스 약관 및 개인정보 보호 정책에 동의하는 것으로 간주합니다.`}</div>
            <div className='login_flex'>
              <Link to="/signup"><div>회원가입</div></Link>
              <Link to="/findpw"><div>아이디/비밀번호 찾기</div></Link>
            </div>
          </div>
        </div>
    );
  }}
// }

export default Login;
