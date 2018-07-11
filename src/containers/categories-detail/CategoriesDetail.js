import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Loader from 'react-loader';
import styled from 'styled-components';
import CategoriesDetailTable from '../../components/categories-detail-table/CategoriesDetailTable.js';

const Section = styled.section `
  max-width: 70rem;
  margin: 0 auto;
`;

const Title = styled.h1 `
  font-size: 2.5rem;
  text-transform: capitalize;
`;

class CategoriesDetail extends Component {
  constructor(props) {
    super(props);
    this.category = this.props.location.pathname.slice(1);
    this.state = {
      data: {
        results: []
      },
      loaded: false,
      error: null
    };
  }

  componentDidMount() {
    this.setState({isLoading: true});
    fetch('https://swapi.co/api/' + this.category)
    .then(response => response.json())
    .then(data => this.setState({data: data, loaded: true}))
    .catch(error => this.setState({error, loaded: true}));
  }

  render() {

    if (this.state.error) {
      return <p>{this.state.error.message}</p>;
    }

    return (

      <Section>
        <Loader loaded={this.state.loaded} color="#fff">
          <Link to="/">Back</Link>
          <Title>{this.category}</Title>
          <CategoriesDetailTable data={this.state.data}></CategoriesDetailTable>
        </Loader>
      </Section>);
  }
}

export default CategoriesDetail;
