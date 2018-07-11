import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Loader from 'react-loader';
import CategoriesDetailTable from '../../components/categories-detail-table/CategoriesDetailTable.js';

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
      return <p>{this.state.message}</p>;
    }

    return (

      <div>
        <Loader loaded={this.state.loaded} color="#fff">
          <Link to="/">Back</Link>
          <h1>{this.category}</h1>
          <CategoriesDetailTable data={this.state.data}></CategoriesDetailTable>
        </Loader>
      </div>);
  }
}

export default CategoriesDetail;
