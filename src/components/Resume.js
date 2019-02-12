import React, { Component } from 'react';
import {
  Container,
  Header
} from 'semantic-ui-react';

class Resume extends Component {
  render() {
    const { brand, plan, year, shouldDisplay } = this.props;
    return (
      shouldDisplay ?
      <Container>
          <Header as='h4'>Brand: { brand }</Header>
          <Header as='h4'>Plan: { plan }</Header>
          <Header as='h4'>Year: { year }</Header>
      </Container>
      : null
    );
  }
}

export default Resume;