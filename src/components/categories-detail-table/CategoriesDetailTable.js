import React, {Component} from 'react';
import styled from 'styled-components';

const Table = styled.table `
  border-collapse: collapse;
  width: 100%;
`;

const Tr = styled.tr `
     &:nth-child(odd){background-color: #232323;
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

    //remove unwanted data
    this.props.data.results.map(data => {
      //people
      delete data.homeworld;
      delete data.films;
      delete data.species;
      delete data.starships;
      delete data.vehicles;
      //residents
      delete data.residents;
      //films
      delete data.characters;
      delete data.opening_crawl;
      delete data.planets;
      //species
      delete data.people;
      //vehicles
      delete data.pilots;
      delete data.manufacturer;

      //general
      delete data.url;
      delete data.edited;
      delete data.created;

      return this.props.data;
    });
  }

  render() {
    return (<Table>
      <ItemCategoryRow data={this.props.data.results}></ItemCategoryRow>
      <tbody>

        {
          this.props.data.results.map((itemData, i) => <Tr key={i}>
            <ItemRow data={itemData}></ItemRow>
          </Tr>)
        }

      </tbody>
    </Table>);
  }

}

class ItemCategoryRow extends Component {

  constructor(props) {
    super(props);
    this.categories = Object.keys(this.props.data[0]).map(category => category.replace(/_/g, " "));
  }

  render() {
    return (<thead>
      <tr>
        {
          this.categories.map((itemData) => <Th key={itemData} onClick={sort.bind(this, itemData)}>
            {itemData}
          </Th>)
        }
      </tr>
    </thead>);
  }
}

function sort(category){
  console.log('sort on', category);
}

class ItemRow extends Component {

  render() {
    return (Object.values(this.props.data).map((itemData, i) => <Td key={i}>
      {itemData}
    </Td>));
  }
}

export default CategoriesDetailTable;
