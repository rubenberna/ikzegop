import React, { Component } from 'react';

import './mainboard.scss'

class LargeScreenContainer extends Component {
  render() {
    const { stayArea, goArea, goDisplay, stayDisplay } = this.props.state

    return (
      <div className='home'>
        <div
          className={stayArea === '50%' ? 'home-large stay' : 'home-large clear-stay'}
          style={{ width: stayArea, display: stayDisplay }}
          onClickCapture={this.props.stay}>
          <div className='home-large-msg'>
            <h1 className='home-large-title stay'>Stay</h1>
            {this.props.fromHappyToHappier()}
            {this.props.showMessage()}
          </div>
        </div>
        <div
          className={goArea === '50%' ? 'home-large go' : 'home-large clear-go'}
          style={{ width: goArea, display: goDisplay }}
          onClickCapture={this.props.hastyClick}>
          <div className='home-large-msg'>
            <h1 className='home-large-title go'>Go</h1>
            {this.props.fromSadToSaddier()}
            {this.props.showMessage()}
          </div>
          <div className='anxious-msg'>
            {this.props.anxiousMsg()}
          </div>
        </div>
      </div>
    )
  }
}

export default LargeScreenContainer