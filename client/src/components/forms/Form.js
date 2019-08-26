import React, { Component } from 'react';
import { Form, Header } from 'semantic-ui-react'

import { ReactComponent as Logo } from '../../assets/logo.svg'
import './form.scss'

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other' },
]


class FinalForm extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state
    return (
      <div className='final-form'>
        <Header>
          <Logo/>
          We're sorry to see you go! We will miss you!
        </Header>
        <Form>
          <Form.Group widths='equal'>
            <Form.Input fluid label='Naam' placeholder='Naam' />
            <Form.Input fluid label='Voornaam' placeholder='Voornaam'/>
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Input fluid label='E-mail' placeholder='E-mail' />
            <Form.Input fluid label='Telefoonnummer' placeholder='Telefoonnummer' />
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Input fluid label='Adres' placeholder='Adres' />
          </Form.Group>
          <Form.Select
            fluid
            label='Reason to leave'
            options={options}
            placeholder='Reason'
          />
          <Form.TextArea label='About' placeholder='Tell us more about what could we do differently...' />
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default FinalForm
