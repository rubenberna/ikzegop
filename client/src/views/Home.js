import React, { Component } from 'react';
import axios from 'axios'

import './home.scss'
import FinalForm from '../components/form/Form'
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
    stayDisplay: 'flex',
    hastyClicked: false
  }

  sendDataToCustomerCare = (clientData) => {    
    axios.post('/sendEmail', {clientData})
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

  fromHappyToHappier = () => {
    const { stayMsg } = this.state
    return stayMsg ? <Smiley color={'#FBFFFE'} label={'happier'}>&#128521;</Smiley> : <Smiley color={'#FBFFFE'} label={'happy'}>&#128515;</Smiley> 
  }

  fromSadToSaddier = () => {
    const { leaveMsg } = this.state
    return leaveMsg ? <Smiley color={'#F4AC45'} label={'saddier'}>&#128531;</Smiley> : <Smiley color={'#F4AC45'} label={'sad'}>&#128542;</Smiley>
  }

  showMessage = () => {
    const { leaveMsg, stayMsg } = this.state
    if (stayMsg) return <Message color={'#FBFFFE'}>Thank you for staying with us!</Message>
    if (leaveMsg) return <Message color={'#F4AC45'}>We're sorry to see you go</Message>
  }

  hastyClick = () => {
    if (this.state.formVisible) this.setState({ hastyClicked: true })
  }

  anxiousMsg = () => {
    if (this.state.hastyClicked && this.state.formVisible) {
      return (
        <Message 
          color={'#F4AC45'}>
          Please enter your details first
        </Message>
      )
    }
  }

  render() {
    const { stayArea, goArea, goDisplay, stayDisplay } = this.state
    return (
      <div className='home'>
        <div className='home-area stay' 
          style={{ width: stayArea, display: stayDisplay }} 
          onClickCapture={this.stay}>
          <div className='home-msg'>
            <h1 className='home-title stay'>Stay</h1>
            { this.fromHappyToHappier() }
            { this.showMessage() }
          </div>
        </div>
        <div className='home-area go' 
          style={{ width: goArea, display: goDisplay }}
          onClickCapture={this.hastyClick}>
          <div className='home-msg'>
            <h1 className='home-title go'>Go</h1>
            { this.fromSadToSaddier() }
            { this.showMessage() }
          </div>
          <div className='anxious-msg'>
            {this.anxiousMsg()}
          </div>
        </div>
        <FinalForm sendData={this.sendDataToCustomerCare} formVisible={this.state.formVisible} msgVisible={this.state.msgVisible} toggleFormVisibility={this.toggleFormVisibility} />
      </div>
    )
  }
}

export default Home