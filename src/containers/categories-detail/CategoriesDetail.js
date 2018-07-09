import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import CategoriesDetailTable from '../../components/categories-detail-table/CategoriesDetailTable.js';

class CategoriesDetail extends Component {
  constructor(props) {
    super(props);
    this.category = this.props.location.pathname;
    this.state = {
      data: {
        results: []
      },
      isLoading: false,
      error: null
    };
  }

  componentDidMount() {
    this.setState({isLoading: true});
    fetch('https://swapi.co/api' + this.category)
    .then(response => response.json())
    .then(data => this.setState({data: data, isLoading: false}))
    .catch(error => this.setState({error, isLoading: false}));
  }

  render() {

    if (this.state.error) {
      return <p>{this.state.message}</p>;
    }

    if (this.state.isLoading) {
      return <p>Loading</p>;
    }

    return (<div>
      <Link to="/">Back</Link>
      <CategoriesDetailTable data={this.state.data}></CategoriesDetailTable>
    </div>);
  }
}

export default CategoriesDetail;
