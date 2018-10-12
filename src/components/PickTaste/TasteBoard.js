import React, { Component} from 'react'
import {Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';


import TasteBlock from './TasteBlock'
import JangreBlock from './JangreBlock'


export default class TasteBoard extends Component {

    state = {

        taste: [
            '#만화',
            '#취업',
            '#심리',
            '#우울',
            '#스타트업',
            '#힐링',
            '#여행',
            '#블록체인',
            '#스트레스',
            '#pc게임',
            '#영화',
            '#'
        ],

        jangre: [
            '백과사전',
            '간행물',
            '신문',
            '철학',
            '종교',
            '사회과학',
            '자연과학',
            '기술과학',
            '예술',
            '언어',
            '문학',
            '역사'
        ],
        pageStatus: 'taste',

        selected: []
    }

    _renderTasteBlock = () => {
        const tasteblocks = this.state.taste.map((select, index) => {
            return <TasteBlock select = {select} key = {index}/>
        })
        return tasteblocks
    }

    _renderJangreBlock = () => {
        const jangreblocks = this.state.jangre.map((select, index) => {
            return <JangreBlock select = {select} key = {index}/>
        })
        return jangreblocks
    }

    _boardRenderer = () => {
        if(this.state.pageStatus==='taste') {
            return this._renderTasteBlock();
        }
        else if(this.state.pageStatus==='jangre') {
            return this._renderJangreBlock();
        }
    }

    _togglePage = () => {
        if(this.state.pageStatus==='taste') {
            this.setState({pageStatus:'jangre'})
        } else if (this.state.pageStatus==='jangre') {
            this.setState({pageStatus:'taste'})
        }
    }
  
  render() {
    return (
      <div className = 'TasteBoard'>
      <div className = 'WelcomeUser'>
      Alejandra님 마음에 드는 책 종류를 선택해 주세요. (3개이상)
      </div>
      <div className = 'tabContainer'>
      <div className = 'Taste' onClick={this.state.pageStatus==='jangre'?this._togglePage:null}>
      관심
      </div>
      <div className = 'Jangre' onClick={this.state.pageStatus==='taste'?this._togglePage:null}>
      장르
      </div>
      </div>
      <div className = 'blockContainer'>
      {this._boardRenderer()}
      </div>
      <Button className = 'selectComplete'><Link to='/'>선택완료</Link></Button>
      </div>
    )
  }
}
