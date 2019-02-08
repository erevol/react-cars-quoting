import React, { Component } from 'react'
import {
    Container,
    Header
} from 'semantic-ui-react';

class Total extends Component {
    render() {
        return (
            <Container>
                <Header as='h1'>Total</Header>
                <Header as='h4'>$1234.00</Header>
            </Container>
        )
    }
}
export default Total;