import React, {Component} from 'react';
import {HashRouter, Switch, Route, Link} from 'react-router-dom';

class CategoriesDetail extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.location.pathname);
    this.state = {
      data: [],
      isLoading: false
    };
  }

  componentDidMount() {

    this.setState({isLoading: true});
  }

  render() {
    return (<h1>Test</h1>);

  }
}

export default CategoriesDetail;
