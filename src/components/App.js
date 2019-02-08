import React, { Component } from 'react';
import {
    Button,
    Container,
    Dropdown,
    Form,
    Grid,
    Header,
    Radio
} from 'semantic-ui-react';
import cars from '../data/cars';
import Total from './Total';
const years = [{
    "key": "1",
    "value": "1",
    "text": "2016"
},
{
    "key": "2",
    "value": "2",
    "text": "2017"
},
{
    "key": "3",
    "value": "3",
    "text": "2018"
},
{
    "key": "4",
    "value": "4",
    "text": "2019"
}];
class App extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }

    handleChange = (e, { value }) => this.setState({ value })
    
    render() {
        return (
            <Container style={{ marginTop: '3em' }}>
                <Header as='h1' dividing>CarQuotes</Header>
                <Grid columns={2} stackable>
                    <Grid.Column>
                        <Form>
                            <Form.Field>
                                <Dropdown placeholder='Brand' fluid selection options={cars} />
                            </Form.Field>
                            <Form.Field>
                                <Dropdown placeholder='Year' fluid selection options={years} />
                            </Form.Field>
                            <Form.Field>
                                Selecte your favorite plan: <b>{this.state.value}</b>
                            </Form.Field>
                            <Form.Field>
                                <Radio
                                    label='Basic'
                                    name='radioGroup'
                                    value='Basic'
                                    checked={this.state.value === 'Basic'}
                                    onChange={this.handleChange}
                                />
                            </Form.Field>
                            <Form.Field>
                                <Radio
                                    label='Full'
                                    name='radioGroup'
                                    value='Full'
                                    checked={this.state.value === 'Full'}
                                    onChange={this.handleChange}
                                />
                            </Form.Field>
                            <Form.Field>
                                <Button color='black' size='big'>Quote</Button>
                            </Form.Field>
                        </Form>
                    </Grid.Column>
                    <Grid.Column>
                        <Total />
                    </Grid.Column>
                </Grid>
            </Container>
        );
    }
}

export default App;
