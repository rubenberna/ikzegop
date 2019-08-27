import React, { Component } from 'react';
import { Form, Transition } from 'semantic-ui-react'

import './form.scss'
import UiDivider from '../divider/Divider'
import Intro from '../intro/Intro'

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other' },
]


class FinalForm extends Component {
  state = {
    formVisible: true,
    msgVisible: false
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

  validateForm = (cancellationData) => {
    let change = {}
    let canBeSubmitted = true

    // 1. Check if all fields have an input
    for (let key in cancellationData) {
      let value = cancellationData[key]
      if (value === undefined || value === '' || value === 'error') {
        change[key] = 'error'
        canBeSubmitted = false
        this.setState({ ...change })
      }
    }

    // 2. Regex email
    if (cancellationData.email) {
      if (this.verifyEmail(cancellationData.email) === false) {
        this.setState({ email: 'error' })
        canBeSubmitted = false
      }
    }

    // 3. Submit form
    if (canBeSubmitted) {
      this.props.sendData(cancellationData)
      this.props.toggleFormVisibility()
    }
  }

  render() {
    const { voornaam, naam, email, telefoonummer, adres, reason, comments } = this.state
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
                  error={email === 'error' && { content: 'Wrong email format', pointing: 'above'}} 
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
              <Form.Select
                fluid
                label='Reason to leave'
                options={options}
                placeholder='Reason'
                onChange={e => this.setState({'reason': e.target.innerText})}
                error={reason === 'error'}
                onFocus={e => this.clearError('reason')}
              />
              <Form.TextArea 
                label='Comments' 
                placeholder='Tell us more about what could we do differently...' 
                onChange={e => this.handleChange('comments', e)} 
                error={comments === 'error'} 
                onFocus={e => this.clearError('comments')}
              />
              <Form.Button>Submit</Form.Button>
            </Form>
          </div>
        </Transition>
      </>
    )
  }
}

export default FinalForm
