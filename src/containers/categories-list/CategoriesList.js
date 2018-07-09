import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class CategoriesList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: false
    };
  }

  componentDidMount() {
    this.setState({isLoading: true});
    fetch('https://swapi.co/api/').then(response => response.json()).then(data => this.setState({data: Object.keys(data), isLoading: false}));
  }

  render() {


    if (this.state.isLoading) {
      return <p>Loading ...</p>;
    }

    return (
      <ul>
      {
        this.state.data.map(categories => <li key={categories}>
          <Link to={categories}>{categories}</Link>
        </li>)
      }
    </ul>
    );

  }
}

export default CategoriesList;
