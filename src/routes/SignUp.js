import React, { Component } from "react";
import '../components/Login/Login.css';
import { Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import axios from "axios";

class SignUp extends Component {
  state = {
    email : '',
    password : '',
    confirmPassword : true,
    signUp_Done : false,
    signUp_Err: false,
  }

  _setEmail = (e) => {
    console.log('Login.js의 setEmail함수입니다. e.target.value 찍는중', e.target.value)
    this.setState({email : e.target.value});
  }

  _setPassword = (e) => {
    console.log('Login.js의 setPw함수입니다. e.target.value 찍는중', e.target.value)
    this.setState({password : e.target.value});
  }

  _checkPassword = (e) => {
    console.log('Login.js의 checkPw함수입니다. e.target.value 찍는중', e.target.value)
    if(this.state.password === e.target.value) {
      this.setState({confirmPassword : true})
    }else{
      this.setState({confirmPassword : false})
    } //TODO:이거 이렇게 하면 되나염....'ㅁ'
  }

  _handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login.js의 handleSubmit함수입니다. this.state 찍는중', this.state)

    if(this.state.email && this.state.password && this.state.confirmPassword){
      const user = {
        emailId : this.state.email,
        password : this.state.password
      };  
    
      // TODO: {"emailId":"sueminee@gmail.com", "password": "123"} 이렇게 보내라길래.
      // 아래처럼 제이슨스트링거파이 했더니 400에러뜸.
      // const user = JSON.stringify({
      //   emailId : this.state.email,
      //   password : this.state.password
      // }); 
      
      console.log('signUp is ready_', user)

      axios.post(`http://ec2-13-125-246-249.ap-northeast-2.compute.amazonaws.com:3000/api/user`, user)
      .then(res => {
        console.log('res', res);
        console.log('res.data', res.data);
        if(res.status === 200){
          this.setState({
            signUp_Done : true,
            signUp_Err : false,
          })

        }else{
          this.setState({
            signUp_Done : false,
            signUp_Err : true})
            // TODO:sign up 실패했다는 신호가 나오면, 이메일 비밀번호가 일치하지 않습니다.
            // alert창? 띄우기? 아니면 그 메세지div만 추가?
        }
      })
    }
  }

  render() {
    // TODO: 서버랑 통신되면 여기 주석 풀기
    if(this.state.signUp_Done){
      return(
        <div>
          <div>{this.state.email}님! 이책반냥에 가입해주셔서 감사합니다.</div>
            <Link to="/"><div>로그인하러 가기</div></Link>
        </div>
      )
    }else if(this.state.signUp_Err){
      return(
        <div>
          <div>회원가입에 실패했습니다.</div>
            <Link to="/signup"><div>다시 회원가입하러 가기</div></Link>
        </div>
      )
    }else{
      return (
        <div className='login_container' >
          <div className='signup_container_1'>
            <div className='login_container_2'>
            <h5>책, 콘텐츠를 모두와 공유하기</h5>
            <h1>이책반냥<Icon name="paw" size="small" /></h1>
            <h3>회원가입하기</h3>
            </div>
            <form onSubmit={this._handleSubmit}>
              <div className='signup_email'>
                  <input className='login_input'
                    type="email"
                    placeholder="이메일을 입력해주세요"
                    onChange={this._setEmail}></input>
              </div>
              
              <div className='signup_email'>
                <div><input className='login_input'
                      type="password"
                      placeholder="비밀번호를 입력해주세요"
                      onChange={this._setPassword}></input>
                </div>
                  
                {this.state.confirmPassword ?
                
                  <div>
                    <input className='login_input'
                      type="password"
                      placeholder="비밀번호를 다시 한번 입력해주세요"
                      onChange={this._checkPassword}>
                    </input>
                  </div>
                  :
                  <div>
                    <input className='login_input'
                      type="password"
                      placeholder="비밀번호를 다시 한번 입력해주세요"
                      onChange={this._checkPassword}>
                    </input>
                    <div style={{color:'red'}}>비밀번호가 일치하지 않습니다.</div>
                  </div>
                }
                </div>
              <div><button className='login_btn' type='submit'>회원가입하기</button></div>
            </form>
            <div className='login_flex'>
              <Link to="/"><div>로그인하러 가기</div></Link>
              <Link to="/findpw"><div>아이디/비밀번호 찾기</div></Link>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default SignUp;
