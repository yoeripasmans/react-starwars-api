import React, {Component} from 'react';

class CategoriesDetailTable extends Component {

  constructor(props) {
    super(props);
    console.log(this.props.data);
  }

  render() {
    return (
      <table>
      <ItemCategoryRow data={this.props.data.results}></ItemCategoryRow>
      <tbody>

        {
          this.props.data.results.map(itemData => <tr>
            <ItemRow key={itemData.name} data={itemData}></ItemRow>
          </tr>)
        }

      </tbody>
    </table>);
  }

}

class ItemCategoryRow extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (<thead>
      <tr>
        <th>{this.props.data.name}</th>
      </tr>
    </thead>);
  }
}

class ItemRow extends Component {

  constructor(props) {
    super(props);
    console.log(this.props.data);
  }

  render() {
    if (this.props.data.name) {
      return (<td>{this.props.data.name}</td>);
    } else if (this.props.data.title) {
      return (<td>{this.props.data.title}</td>);
    }
    return(
      <td>{this.props.data.created}</td>
    );

  }
}

export default CategoriesDetailTable;
