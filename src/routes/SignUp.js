import React, { Component } from "react";
import '../components/Login/Login.css';
import { Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

class SignUp extends Component {
  render() {
    return (
      <div className='login_container' >
        <div className='signup_container_1'>
          <div className='login_container_2'>
          <h5>책, 콘텐츠를 모두와 공유하기</h5>
          <h1>이책반냥<Icon name="paw" size="small" /></h1>
          <h3>회원가입하기</h3>
          </div>
          
          <div className='signup_email'><input className='login_input' type="email" placeholder="이메일을 입력해주세요"></input></div>
          <div className='signup_email'>
            <div><input className='login_input' type="password" placeholder="비밀번호를 입력해주세요"></input></div>
            <div><input className='login_input' type="password" placeholder="비밀번호를 다시 한번 입력해주세요"></input></div>
          </div>
          

          <div><button className='login_btn'>회원가입하기</button></div>

          <div className='login_flex'>
            <Link to="/"><div>로그인하러 가기</div></Link>
            <Link to="/findpw"><div>아이디/비밀번호 찾기</div></Link>
          </div>
        </div>
      </div>
    )
  }
}

export default SignUp;
