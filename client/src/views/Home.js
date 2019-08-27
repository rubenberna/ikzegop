import React, { Component } from 'react';

import './home.scss'
import FinalForm from '../components/forms/Form'
import Smiley from '../components/smileys/Smiley'


class Home extends Component {

  sendDataToCustomerCare = (clientData) => {
    console.log(clientData);
    
  }

  render() {
    return (
      <div className='home'>
        <div className='home-stay'>
          <h1 className='home-stay-title'>Stay</h1>
          <Smiley color={'#FBFFFE'}>&#128515;</Smiley>
        </div>
        <div className='home-go'>
          <h1 className='home-go-title'>Go</h1>
          <Smiley color={'#F4AC45'}>&#128542;</Smiley>
        </div>
        <FinalForm sendData={this.sendDataToCustomerCare}/>
      </div>
    )
  }
}

export default Home