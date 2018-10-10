import React, { Component } from 'react'
import TasteBlock from './TasteBlock'

import './CSS/TasteBoard.css'

export default class TasteBoard extends Component {

    state = {
        taste: [
            '#연애',
            '#취업',
            '#심리',
            '#우울',
            '#스타트업',
            '#힐링',
            '#여행',
            '#블록체인',
            '#스트레스',
            '#pc게임',
            '#영화'
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
            '역사',
        ]
    }

    _renderTasteBlock = () => {
        const tasteblocks = this.state.taste.map((taste) => {
            return <TasteBlock taste = {taste}/>
        })
        return tasteblocks
    }
  
  render() {
    return (
      <div className = 'TasteBoard'>
      {this._renderTasteBlock()}
      </div>
    )
  }
}
