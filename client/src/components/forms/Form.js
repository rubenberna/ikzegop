import React, { Component } from 'react';
import { Form } from 'semantic-ui-react'

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
        <Form>
          <Form.Group widths='equal'>
            <Form.Input fluid label='Naam' placeholder='Naam' />
            <Form.Input fluid label='Voornaam' placeholder='Voornaam' />
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Input fluid label='E-mail' placeholder='E-mail' />
            <Form.Input fluid label='Telefoonnummer' placeholder='Telefoonnummer' />
          </Form.Group>
          <Form.Group inline>
            <label>Size</label>
            <Form.Radio
              label='Small'
              value='sm'
              checked={value === 'sm'}
              onChange={this.handleChange}
            />
            <Form.Radio
              label='Medium'
              value='md'
              checked={value === 'md'}
              onChange={this.handleChange}
            />
            <Form.Radio
              label='Large'
              value='lg'
              checked={value === 'lg'}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.TextArea label='About' placeholder='Tell us more about you...' />
          <Form.Checkbox label='I agree to the Terms and Conditions' />
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default FinalForm

//   < Form.Select
// fluid
// label = 'Gender'
// options = { options }
// placeholder = 'Gender'
//   />