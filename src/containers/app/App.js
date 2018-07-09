import React, {Component} from 'react';
import CategoriesList from '../categories-list/CategoriesList.js';
import CategoriesDetail from '../categories-detail/CategoriesDetail.js';
import './App.css';
import {HashRouter, Switch, Route} from 'react-router-dom';

function NotFound(){
  return(
    <h2>Page not found m8</h2>
  );
}

class App extends Component {

  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path='/' component={CategoriesList}/>
          <Route path='/:category' component={CategoriesDetail}/>
          <Route path='*' component={NotFound} />
        </Switch>
      </HashRouter>);
  }
}

export default App;
