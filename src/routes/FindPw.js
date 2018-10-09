import React, { Component } from "react";
import '../components/Login/Login.css';
import { Icon } from "semantic-ui-react";

class FindPw extends Component {
  render() {
    return (
      <div className='login_container' >
        <div className='findpw_container_1'>
          <div className='login_container_2'>
            <h5>책, 콘텐츠를 모두와 공유하기</h5>
            <h1>이책반냥<Icon name="paw" size="small" /></h1>
            <h3>비밀번호 재설정하기</h3>
          </div>
          <h5>이메일로 필요한 정보를 보내드리겠습니다.</h5>
          <div className='signup_email'>
            <input className='findPw_input' type="email" placeholder="이메일을 입력해주세요"></input>
            <span><button><Icon name="search" size="small" /></button></span>
            <div><button className='login_btn'>비밀번호 재설정 이메일 보내기</button></div>
          </div>
          
          <div className='login_flex'>
            <div>로그인하러가기</div>
            <div>회원가입하기</div>
          </div>

        </div>
      </div>
    )
  }
}

export default FindPw;
