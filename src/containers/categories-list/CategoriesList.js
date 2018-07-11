import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Section = styled.section `
  max-width: 70rem;
  margin: 0 auto;
`;

const Title = styled.h1 `
  font-size: 2.5rem;
`;

const List = styled.ul `
  padding: 0;
  display: flex;
  justify-content: space-between;
`;

const ListItem = styled.li `
  font-size: 1.2rem;
  text-decoration: none;
  text-transform: capitalize;
  list-style-type: none;

`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #fff;
    width: 10rem;
    height: 10rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    background-color: #2f2f2f;

`;

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

    return (<Section>
      <Title>Starwars API with React</Title>
      <List>
        {
          this.state.data.map(categories => <ListItem key={categories}>
            <StyledLink to={categories}>{categories}</StyledLink>
          </ListItem>)
        }
      </List>
    </Section>);

  }
}

export default CategoriesList;
