import React, { Component } from 'react';
import { Form, Header } from 'semantic-ui-react'

import './form.scss'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import UiDivider from '../divider/Divider'

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other' },
]


class FinalForm extends Component {
  state = {

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
    const { naam, voornaam, email, telefoonummer, adres, reason, description } = this.state
    const cancellationData = {
      naam,
      voornaam,
      email,
      telefoonummer,
      adres,
      reason,
      description
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
    for (const key in cancellationData) {
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
    }
  }

  render() {
    const { voornaam, naam, email, telefoonummer, adres, reason, description } = this.state
    return (
      <div className='final-form'>
        <Header>
          <Logo/>
          We're sorry to see you go! We will miss you!
        </Header>
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
            label='About' 
            placeholder='Tell us more about what could we do differently...' 
            onChange={e => this.handleChange('description', e)} 
            error={description === 'error'} 
            onFocus={e => this.clearError('description')}
          />
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default FinalForm
