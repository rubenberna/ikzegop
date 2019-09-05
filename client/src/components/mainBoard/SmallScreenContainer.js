import React, { Component } from 'react'

import './mainboard.scss'

class SmallScreenContainer extends Component {
  render() {
    return (
      <div className='home-small'>
        <div className='home-small-title'>
          <h1>We'd like you to stay</h1>
        </div>
        {this.props.smallAndSadMsg()}
      </div>
    )
  }
}

export default SmallScreenContainer