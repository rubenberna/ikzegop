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
  state = {}

  handleChange = (name, e) => {
    const change = {}
    let inputValue = e.target.value
    if (name === 'voornaam' || name === 'naam') inputValue = inputValue.charAt(0).toUpperCase() + inputValue.slice(1)
    change[name] = inputValue
    this.setState({ ...change })
  }



  render() {
    const { value } = this.state
    return (
      <div className='final-form'>
        <Header>
          <Logo/>
          We're sorry to see you go! We will miss you!
        </Header>
        <UiDivider/>
        <Form>
          <Form.Group widths='equal'>
            <Form.Input fluid label='Naam' placeholder='Naam' onChange={e => this.handleChange('naam', e)}/>
            <Form.Input fluid label='Voornaam' placeholder='Voornaam' onChange={e => this.handleChange('voornaam', e)}/>
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Input fluid label='E-mail' placeholder='E-mail' onChange={e => this.handleChange('email', e)} />
            <Form.Input fluid label='Telefoonnummer' placeholder='Telefoonnummer' onChange={e => this.handleChange('telefoonummer', e)} />
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Input fluid label='Adres' placeholder='Adres' onChange={e => this.handleChange('adres', e)} />
          </Form.Group>
          <Form.Select
            fluid
            label='Reason to leave'
            options={options}
            placeholder='Reason'
            onChange={e => this.setState({'reason': e.target.innerText})}
          />
          <Form.TextArea label='About' placeholder='Tell us more about what could we do differently...' onChange={e => this.handleChange('description', e)}/>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default FinalForm
