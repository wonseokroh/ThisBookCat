import React, { Component } from "react";
// import Nav1 from "../components/Nav1";
import '../components/Login/Login.css';
import { Icon } from "semantic-ui-react";

class Login extends Component {
  render() {
    return (
      <div className='login_container' >
        <div className='login_container_1'>
          <div className='login_container_2'>
          <h5>책, 콘텐츠를 모두와 공유하기</h5>
          <h1>이책반냥<Icon name="paw" size="small" /></h1>
          <h3>이책반냥에 오신 것을 환영합니다.</h3>
          </div>
          
          <div><input className='login_input' type="email" placeholder="이메일을 입력해주세요"></input></div>
          <div><input className='login_input' type="password" placeholder="비밀번호를 입력해주세요"></input></div>
          <div><button className='login_btn'>계속하기</button></div>
          <h5>또는</h5>
          <div><button className='login_btn'>FACEBOOK으로 계속하기</button></div>
          <div><button className='login_btn'>GOOGLE로 계속하기</button></div>
          <div className='login_privacy'>{`계속하면 이책반냥 서비스 약관 및 개인정보 보호 정책에 \n 동의하는 것으로 간주합니다.`}</div>
          <div className='login_flex'>
            <div>회원가입</div>
            <div>아이디/비밀번호 찾기</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;


