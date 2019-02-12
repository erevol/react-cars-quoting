import React, { Component } from 'react'
import {
    Container,
    Statistic
} from 'semantic-ui-react';

class Total extends Component {
    render() {
        return (
          this.props.total ?
            <Container>
                <Statistic>
                  <Statistic.Label>Total</Statistic.Label>
                  <Statistic.Value>$ {this.props.total.toFixed(2)}</Statistic.Value>
                </Statistic>
            </Container>
          : null
        )
    }
}
export default Total;