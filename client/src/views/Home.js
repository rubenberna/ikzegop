import React, { Component } from 'react';

import './home.scss'
import FinalForm from '../components/forms/Form'
import Happy from '../components/smileys/Happy'
import Sad from '../components/smileys/Sad'

class Home extends Component {

  render() {
    return (
      <div className='home'>
        <div className='home-stay'>
          <h1 className='home-stay-title'>Stay</h1>
          <Happy/>
        </div>
        <div className='home-go'>
          <h1 className='home-go-title'>Go</h1>
          <Sad/>
        </div>
        <FinalForm/>
      </div>
    )
  }
}

export default Home