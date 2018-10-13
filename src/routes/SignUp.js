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
    signupDone : false,
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
        email : this.state.email,
        password : this.state.password
      };  //TODO: Login Post 요청 날릴때 어떤 형식으로 보내줘야 하는지. user 객체처럼 보내주면 되나? 

      console.log('signUp is ready_')
      // axios.post(`SignUp post 날릴 endpoint`, { user })
      // .then(res => {
      //   console.log(res);
      //   console.log(res.data);
      //   res.json();//?
      // })
      // .then(data => {
      //   if('data에 SignUp 잘됐다는 신호가 있으면'){
      //    this.setState({signupDone : true})
      //   }else{
      //     // 로그인 실패했다는 신호가 나오면, TODO:이메일 비밀번호가 일치하지 않습니다. alert창? 띄우기? 아니면 그 메세지div만 추가?
      //   }
      // })
    }
    
  }

  render() {
    // TODO: 서버랑 통신되면 여기 주석 풀기
    // if(this.state.signupDone)){
    //   return <Redirect to ='/login' />;
    // }else{
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
// }

export default SignUp;
