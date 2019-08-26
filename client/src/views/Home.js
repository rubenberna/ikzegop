import React, { Component } from 'react';

import './home.scss'
import FinalForm from '../components/forms/Form'

class Home extends Component {

  render() {
    return (
      <div className='home'>
        <div className='home-stay'>
          <h1 className='home-stay-title'>Stay</h1>
        </div>
        <div className='home-go'>
          <h1 className='home-go-title'>Go</h1>
        </div>
        <FinalForm/>
      </div>
    )
  }
}

export default Home