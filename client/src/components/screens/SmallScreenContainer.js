import React, { Component } from 'react'

import './mainboard.scss'

class SmallScreenContainer extends Component {
  render() {
    return (
      <div className='home-small'>
        <div className='home-small-title'>
          <h1>We zouden het fijn vinden u te mogen blijven verder helpen in de toekomst</h1>
        </div>
        {this.props.smallAndSadMsg()}
      </div>
    )
  }
}

export default SmallScreenContainer
