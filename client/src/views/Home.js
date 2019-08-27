import React, { Component } from 'react';

import './home.scss'
import FinalForm from '../components/forms/Form'
import Smiley from '../components/smileys/Smiley'
import Message from '../components/message/Message'


class Home extends Component {
  state = {
    formVisible: true,
    stayMsg: false,
    leaveMsg: false,
    stayArea: '50%',
    goArea: '50%',
    goDisplay: 'flex',
    stayDisplay: 'flex'
  }

  sendDataToCustomerCare = (clientData) => {
    console.log(clientData);
    this.sayGoodbye()
  }

  sayGoodbye = () => {
    this.setState({
      stayArea: '0%',
      goArea: '100%',
      stayDisplay: 'none',
      leaveMsg: true
    })
    setTimeout(() => window.location.replace("https://easylife-dc.be/"), 10000)  
  }

  stay = () => {
    this.setState({
      stayArea: '100%',
      goArea: '0%',
      goDisplay: 'none',
      formVisible: false,
      stayMsg: true
    }) 
    setTimeout(() => window.location.replace("https://easylife-dc.be/"), 10000)
  }

  toggleFormVisibility = () => {
    this.setState({
      formVisible: false,
      msgVisible: true
    })
  }

  render() {
    const { stayArea, goArea, goDisplay, stayDisplay, stayMsg, leaveMsg } = this.state
    return (
      <div className='home'>
        <div className='home-area stay' style={{ width: stayArea, display: stayDisplay }} onClickCapture={this.stay}>
          <div className='home-msg'>
            <h1 className='home-title stay'>Stay</h1>
            <Smiley color={'#FBFFFE'}>&#128515;</Smiley>
            {stayMsg && <Message color={'#FBFFFE'}>Thank you for staying with us!</Message>}
          </div>
        </div>
        <div className='home-area go' style={{ width: goArea, display: goDisplay }}>
          <div className='home-msg'>
            <h1 className='home-title go'>Go</h1>
            <Smiley color={'#F4AC45'}>&#128542;</Smiley>
            {leaveMsg && <Message color={'#F4AC45'}>We're sorry to see you go</Message>}
          </div>
        </div>
        <FinalForm sendData={this.sendDataToCustomerCare} formVisible={this.state.formVisible} msgVisible={this.state.msgVisible} toggleFormVisibility={this.toggleFormVisibility} />
      </div>
    )
  }
}

export default Home