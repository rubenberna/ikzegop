import React, { Component } from 'react';

class LargeScreen extends Component {
  render() {
    const { stayArea, goArea, goDisplay, stayDisplay } = this.props.state

    return (
      <div className='home'>
        <div
          className={stayArea === '50%' ? 'home-area stay' : 'home-area clear-stay'}
          style={{ width: stayArea, display: stayDisplay }}
          onClickCapture={this.props.stay}>
          <div className='home-msg'>
            <h1 className='home-title stay'>Stay</h1>
            {this.props.fromHappyToHappier()}
            {this.props.showMessage()}
          </div>
        </div>
        <div
          className={goArea === '50%' ? 'home-area go' : 'home-area clear-go'}
          style={{ width: goArea, display: goDisplay }}
          onClickCapture={this.props.hastyClick}>
          <div className='home-msg'>
            <h1 className='home-title go'>Go</h1>
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

export default LargeScreen