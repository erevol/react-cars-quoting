import React, { Component } from 'react';
import {
    Button,
    Dropdown,
    Form,
    Radio
} from 'semantic-ui-react';
import cars from '../data/cars';
class App extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }

    handleChange = (e, { value }) => this.setState({ value })
    
    render() {
        return (
            <div className="ui container">
                <h1 className="ui header">CarQuotes</h1>
                <Form>
                    <Form.Field>
                        Selecte your favorite plan: <b>{this.state.value}</b>
                    </Form.Field>
                    <Form.Field>
                        <Radio
                            label='Basic'
                            name='radioGroup'
                            value='basic'
                            checked={this.state.value === 'basic'}
                            onChange={this.handleChange}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Radio
                            label='Full'
                            name='radioGroup'
                            value='full'
                            checked={this.state.value === 'full'}
                            onChange={this.handleChange}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Dropdown placeholder='Brand' fluid selection options={cars} />
                    </Form.Field>
                    <Form.Field>
                        <Button color='yellow' size='big'>Primary</Button>
                        <Button color='black' size='big'>Secondary</Button>
                    </Form.Field>
                </Form>
                
            </div>
        );
    }
}

export default App;
