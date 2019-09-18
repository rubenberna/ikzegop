import React, { Component } from 'react';
import axios from 'axios'

import FinalForm from '../components/form/Form'
import Message from '../components/message/Message'
import LargeScreenContainer from '../components/screens/LargeScreenContainer'
import SmallScreenContainer from '../components/screens/SmallScreenContainer'
import { Icon } from 'semantic-ui-react'
import HappyApple from '../components/icons/HappyApple'
import HappierApple from '../components/icons/HappierApple'
import SadApple from '../components/icons/SadApple'
import SaddierApple from '../components/icons/SaddierApple'


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
    axios.post('api/sendEmail', {clientData} )
    this.sayGoodbye()
  }

  sayGoodbye = () => {
    this.setState({
      stayArea: '0%',
      goArea: '100%',
      stayDisplay: 'none',
      leaveMsg: true
    })
    // setTimeout(() => window.location.replace("https://easylife-dc.be/"), 10000)
  }

  stay = () => {
    this.setState({
      stayArea: '100%',
      goArea: '0%',
      goDisplay: 'none',
      formVisible: false,
      stayMsg: true
    })
    // setTimeout(() => window.location.replace("https://easylife-dc.be/"), 10000)
  }

  toggleFormVisibility = () => {
    this.setState({
      formVisible: false,
      msgVisible: true
    })
  }

  fromHappyToHappier = () => {
    const { stayMsg } = this.state
    return stayMsg ? <HappierApple /> : <HappyApple/>
  }

  fromSadToSaddier = () => {
    const { leaveMsg } = this.state
    return leaveMsg ? <SaddierApple/> : <SadApple/>
  }

  smallAndSad = () => {
    const { leaveMsg } = this.state
    if (leaveMsg) return (
      <div className='small-sad-msg'>
        <Message><Icon name='paper plane outline' size='huge'/></Message>
        <Message color={'#FBFFFE'}>Bedankt voor uw tijd, we contacteren u snel!</Message>
      </div>
    )
  }

  showMessage = () => {
    const { leaveMsg, stayMsg } = this.state
    if (stayMsg) return <Message color={'#FBFFFE'}>Bedankt dat we u mogen blijven helpen!</Message>
    if (leaveMsg) return (
      <div className='leave-msg'>
        <Message color={'#F4AC45'}>Wat jammer dat u onze onderneming verlaat</Message>
        <h3 style={{color: '#F4AC45'}}>Bedankt voor uw tijd, we contacteren u snel!</h3>
      </div>
    )
  }

  hastyClick = () => {
    if (this.state.formVisible) this.setState({ hastyClicked: true })
  }

  anxiousMsg = () => {
    if (this.state.hastyClicked && this.state.formVisible) {
      return (
        <Message
          color={'#F4AC45'}>
          Kan u eerst uw gegevens invullen alstublieft?
        </Message>
      )
    }
  }

  render() {
    return (
      <>
      <LargeScreenContainer
        state={this.state}
        fromHappyToHappier={this.fromHappyToHappier}
        fromSadToSaddier={this.fromSadToSaddier}
        showMessage={this.showMessage}
        anxiousMsg={this.anxiousMsg}
        hastyClick={this.hastyClick}
        stay={this.stay} />
      <SmallScreenContainer smallAndSadMsg={this.smallAndSad}/>
      <FinalForm
        sendData={this.sendDataToCustomerCare}
        formVisible={this.state.formVisible}
        msgVisible={this.state.msgVisible}
        toggleFormVisibility={this.toggleFormVisibility} />
      </>
    )
  }
}

export default Home
