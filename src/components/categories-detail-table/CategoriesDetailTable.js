import React, {Component} from 'react';
import styled from 'styled-components';

const Table = styled.table `
  border-collapse: collapse;
  width: 100%;
`;

const Td = styled.td `
     text-align: left;
     padding: 0.5rem;
`;

const Th = styled.th `
     text-align: left;
     padding: 0.5rem;
     text-transform: capitalize;
`;


class CategoriesDetailTable extends Component {

  constructor(props) {
    super(props);
    console.log(this.props.data);
  }

  render() {
    return (<Table>
      <ItemCategoryRow data={this.props.data.results}></ItemCategoryRow>
      <tbody>

        {
          this.props.data.results.map(itemData => <tr>
            <ItemRow key={itemData} data={itemData}></ItemRow>
          </tr>)
        }

      </tbody>
    </Table>);
  }

}

class ItemCategoryRow extends Component {

  constructor(props) {
    super(props);
    this.categories = Object.keys(this.props.data[0]).map(category => category.replace(/_/g , " "));
  }

  render() {
    return (<thead>
      <tr>
        {
          this.categories.map((itemData) => <Th key={itemData}>
            {itemData}
          </Th>)
        }
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
    return (Object.values(this.props.data).map((itemData, i) => <Td key={i}>
      {itemData}
    </Td>));
  }
}

export default CategoriesDetailTable;
