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
    login_err:false,
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
    }; 

    axios.post(`http://ec2-13-125-246-249.ap-northeast-2.compute.amazonaws.com:3000/api/user/login`, user)
      .then(res => {
        console.log(res);
        console.log(res.data);
        if(res.status===200){
          window.localStorage.setItem('token', res.data)
          this.setState({
            isLogin : true,
            login_err : false})
        }else{
          this.setState({
            isLogin : false,
            login_err : true})
          // 이메일 혹은 비밀번호가 올바르지 않습니다.
        }
      })
  }

  _googleAuth = (e) => {
    axios.get('http://ec2-13-125-246-249.ap-northeast-2.compute.amazonaws.com:3000/auth/google')
    .then(res => {
      console.log('google Auth res입니다.', res)
    })
  }

  render() {
    // TODO: 서버랑 통신되면 여기 주석 풀기
    if(window.localStorage.getItem('token')){
      return <Redirect to ='/' />;
    }
    else if(this.state.login_err){
      return(
      <div>
          <h1>로그인할 수 없습니다.</h1>
          <h2>이메일 혹은 비밀번호가 올바르지 않습니다.</h2>
          <Link to="/signup"><h4>다시 회원가입하러 가기</h4></Link>
      </div>)
    }else{
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
            <div><button className='login_btn' onClick={this._googleAuth}>GOOGLE로 계속하기</button></div>
            <div className='login_privacy'>{`계속하면 이책반냥 서비스 약관 및 개인정보 보호 정책에 동의하는 것으로 간주합니다.`}</div>
            <div className='login_flex'>
              <Link to="/signup"><div>회원가입</div></Link>
              <Link to="/findpw"><div>아이디/비밀번호 찾기</div></Link>
            </div>
          </div>
        </div>
    );
  }}
}

export default Login;