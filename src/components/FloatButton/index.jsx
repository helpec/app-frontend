import React, { Component } from 'react';
import './floatButton.css'

class FloatButton extends Component {
  onclick= () => { window.open ("https://wa.me/5511982326391?text=Estou%20passando%20mal%2C%20voc%C3%AA%20pode%20me%20ajudar%3F")
    }
  
  render() {
    return (
        <button className= "panico" type= "button" onClick={this.onclick}> Pânico</button> 
        
    )
  }
}

export default FloatButton;