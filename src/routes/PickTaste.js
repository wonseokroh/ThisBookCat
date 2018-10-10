import React, { Component } from "react";
import TasteBoard from '../components/PickTaste/TasteBoard'

import '../components/PickTaste/CSS/PickTaste.css'

class PickTaste extends Component {
  render() {
    return <div className = 'picktaste'>
    <TasteBoard/>
    </div>;
  }
}

export default PickTaste;
