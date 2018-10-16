import React, { Component} from 'react'
import {Button} from 'react-bootstrap'
import axios from 'axios'

import TasteBlock from './TasteBlock'

class TasteBoard extends Component {

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

        pageStatus: 'taste',

        selected: []
    }

    _collectSellection = (taste) => {
        this.setState({
            selected: [...this.state.selected, taste]
        })
        console.log(this.state.selected)
    }


    _deleteSellection = (taste) => {

        let array = [...this.state.selected]
        let index = this.state.selected.indexOf(taste)
        array.splice(index,1)
        
        this.setState({
            selected: array
        })

        console.log(this.state.selected)
    }

    _isSelected = () => {
        if(this.state.selected.length<4) {
            alert('취향 또는 장르를 3개이상 고르셔야 합니다.')
            return false
        }
        return true
    }

    _gotoMain = () => {
        this.props.history.push('/main')
    }

    //서버에 취향 어레이 보내는 함수(go to main 함수와 같이 쓰면 될듯합니다.)//
    _sendTastetoServer = () => {
        axios.post ('서버주소', {taste: this.state.selected})
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }

    _renderTasteBlock = () => {
        const tasteblocks = this.state.taste.map((select, index) => {
            return <TasteBlock select = {select} key = {index} collect = {this._collectSellection} delete = {this._deleteSellection} selectedColor = {this.state.selected}/>
        })
        return tasteblocks
    }

  render() {
    return (
      <div className = 'TasteBoard'>
      <div className = 'WelcomeUser'>
      Alejandra님 마음에 드는 책 종류를 선택해 주세요. (3개이상)
      </div>
      <div className = 'blockContainer'>
      {this._renderTasteBlock()}
      </div>
      <Button className = 'selectComplete' onClick={this.state.selected.length<3?()=>{alert('취향 또는 장르를 3개이상 고르셔야 합니다.')}:this._gotoMain}>선택완료</Button>
      </div>
    )
  }
}

export default TasteBoard 
