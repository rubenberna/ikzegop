import React, { Component } from 'react';
import { Form, Transition } from 'semantic-ui-react'

import './form.scss'
import UiDivider from '../divider/Divider'
import Intro from '../intro/Intro'

class FinalForm extends Component {
  state = {
    formVisible: true,
    msgVisible: false,
  }

  handleChange = (name, e) => {
    const change = {}
    let inputValue = e.target.value
    if (name === 'voornaam' || name === 'naam') inputValue = inputValue.charAt(0).toUpperCase() + inputValue.slice(1)
    change[name] = inputValue
    this.setState({ ...change })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { naam, voornaam, email, telefoonummer, adres, reason, comments } = this.state
    const cancellationData = {
      naam,
      voornaam,
      email,
      telefoonummer,
      adres,
      reason,
      comments
    }
    this.validateForm(cancellationData)
  }

  validateForm = (cancellationData) => {

    let change = {}
    let ready = true

    // 1. Check if all fields have an input
    for (let key in cancellationData) {
      let value = cancellationData[key]
      if (value === undefined || value === '' || value === 'error') {
        change[key] = 'error'
        ready = false
        this.setState({ ...change })
      } else ready = true
    }

    // 2. Regex email
    if (cancellationData.email) {
      if (this.verifyEmail(cancellationData.email) === false) {
        this.setState({ email: 'error' })
        ready = false
      } else ready = true
    }

    // 3. Submit form
    if (ready) {
      this.props.sendData(cancellationData)
      this.props.toggleFormVisibility()
    }
  }

  clearError = (key) => {
    const change = {}
    change[key] = ''
    this.setState({ ...change })
  }

  verifyEmail = (email) => {
    const mailformat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
    if (email.match(mailformat)) return true;
    else return false;
  }



  render() {
    const { voornaam, naam, email, telefoonummer, adres, comments } = this.state
    const { formVisible } = this.props
    return (
      <>
        <Transition
          visible={formVisible}
          animation='fade'
          duration={1500}>
          <div className='final-form'>
            <Intro/>
            <UiDivider/>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group widths='equal'>
                <Form.Input
                  fluid label='Naam'
                  placeholder='Naam'
                  onChange={e => this.handleChange('naam', e)}
                  error={naam === 'error'}
                  onFocus={e => this.clearError('naam')}
                />
                <Form.Input
                  fluid label='Voornaam'
                  placeholder='Voornaam'
                  onChange={e => this.handleChange('voornaam', e)}
                  error={voornaam === 'error'}
                  onFocus={e => this.clearError('voornaam')}
                />
              </Form.Group>
              <Form.Group widths='equal'>
                <Form.Input
                  fluid label='E-mail'
                  placeholder='E-mail'
                  onChange={e => this.handleChange('email', e)}
                  error={email === 'error' && { content: 'Foutief e-mailadres', pointing: 'above'}}
                  onFocus={e => this.clearError('email')}
                />
                <Form.Input
                  fluid label='Telefoonnummer'
                  placeholder='Telefoonnummer'
                  onChange={e => this.handleChange('telefoonummer', e)}
                  error={telefoonummer === 'error'}
                  onFocus={e => this.clearError('telefoonummer')}
                  type='number'
                />
              </Form.Group>
              <Form.Group widths='equal'>
                <Form.Input
                  fluid label='Adres'
                  placeholder='Adres'
                  onChange={e => this.handleChange('adres', e)}
                  error={adres === 'error'}
                  onFocus={e => this.clearError('adres')}
                />
              </Form.Group>
              <Form.TextArea
                label='Reden opzeg'
                onChange={e => this.handleChange('comments', e)}
                error={comments === 'error'}
                onFocus={e => this.clearError('comments')}
              />
              <Form.Button>Versturen</Form.Button>
            </Form>
          </div>
        </Transition>
      </>
    )
  }
}

export default FinalForm
