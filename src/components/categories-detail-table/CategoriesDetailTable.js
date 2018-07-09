import React, {Component} from 'react';

class CategoriesDetailTable extends Component {
  render() {
    return (
      <ul>
        {
          this.props.data.results.map(item =>
          <li key={item.url}>
            {item.name}
          </li>)
        }
      </ul>
    );
  }

}

export default CategoriesDetailTable;
