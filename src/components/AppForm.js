import React, { Component } from 'react';
import {
  Button,
  Dropdown,
  Form,
  Radio
} from 'semantic-ui-react';
import brand from '../data/brand';
import year from '../data/year';

class AppForm extends Component {
  render() {
    return (
      <Form onSubmit={this.props.handleSubmit}>
        <Form.Field>
          <Dropdown onChange={this.props.handleSelectedBrand} placeholder='Brand' fluid selection options={brand} text={this.props.brand} />
        </Form.Field>
        <Form.Field>
          <Dropdown onChange={this.props.handleSelectedYear} placeholder='Year' fluid selection options={year} text={this.props.year} />
        </Form.Field>
        <Form.Field>
          Selecte your favorite plan: <b>{this.props.plan}</b>
        </Form.Field>
        <Form.Field>
          <Radio
            label='Basic'
            name='radioGroup'
            value='Basic'
            checked={this.props.plan === 'Basic'}
            onChange={this.props.handleSelectedPlan}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label='Full'
            name='radioGroup'
            value='Full'
            checked={this.props.plan === 'Full'}
            onChange={this.props.handleSelectedPlan}
          />
        </Form.Field>
        <Form.Field>
          <Button style={{ width: '100%' }} color='black' size='big'>Quote</Button>
        </Form.Field>
      </Form>
    );
  }
}

export default AppForm;