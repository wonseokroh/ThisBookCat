import React, { Component } from "react";
import TasteBoard from '../components/PickTaste/TasteBoard'

import '../components/PickTaste/CSS/PickTaste.css'

class PickTaste extends Component {

  render() {
    console.log(this.props)
    return <div className = 'picktaste'>
    <TasteBoard history = {this.props.history}/>
    </div>;
  }
}

export default PickTaste;
