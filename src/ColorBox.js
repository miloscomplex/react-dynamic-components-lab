
import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [

    ]
  }


  render() {
    let newValue = this.props.opacity - 0.1
    const makeDivs = () => {
      while (newValue >= 0.1) {
        console.log(newValue);
        return <ColorBox opacity={newValue} />
      }
    }

    return (
      <div className="color-box" style={{opacity: this.props.opacity}}>
        {makeDivs()}
      </div>
    )
  }

}
