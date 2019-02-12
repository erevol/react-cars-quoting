import React, { Component } from 'react';
import {
  Container,
  Grid,
  Header
} from 'semantic-ui-react';
import AppForm from './AppForm';
import Resume from './Resume';
import Total from './Total';
import {
  getYearDifference,
  getBrandPercentage,
  getPlanPercentage
} from '../utils/helper';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      brand: '',
      plan: '',
      total: 0,
      year: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelectedPlan = this.handleSelectedPlan.bind(this);
    this.handleSelectedBrand = this.handleSelectedBrand.bind(this);
    this.handleSelectedYear = this.handleSelectedYear.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { brand, plan, year } = this.state;
    // Starting price
    let total = 2000;
    const yearDifference = getYearDifference(year);
    // Get 3%
    total -= ((yearDifference * 3) * total) / 100;
    // Get brand percentage
    total = getBrandPercentage(brand) * total;
    // Get plan percentage
    total = getPlanPercentage(plan) * total;

    this.setState({
      total
    });
  }

  handleSelectedPlan(e, { value }) {
    this.setState({
      plan: value
    });
  }

  handleSelectedBrand(e, data) {
    this.setState({
      brand: data.options[data.value - 1].text
    })
  }

  handleSelectedYear(e, data) {
    this.setState({
      year: data.options[data.value - 1].text
    })
  }

  render() {
    const { brand, plan, year, total } = this.state;
    return (
      <Container style={{ marginTop: '100px' }}>
        <Header as='h1' dividing>CarQuotes</Header>
        <Grid columns={3} stackable>
          <Grid.Column>
            <AppForm
              handleSubmit={this.handleSubmit}
              handleSelectedBrand={this.handleSelectedBrand}
              handleSelectedYear={this.handleSelectedYear}
              handleSelectedPlan={this.handleSelectedPlan}
              brand={brand}
              plan={plan}
              year={year}
            />
          </Grid.Column>
          <Grid.Column>
            <Resume
              brand={brand}
              plan={plan}
              year={year}
              shouldDisplay={total}
            />
          </Grid.Column>
          <Grid.Column>
            <Total total={total} />
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

export default App;
