import React from 'react';
import styled from 'styled-components'
import Card from './Card/Card';

const Div = styled.div`
  display: block;
  height: 10px;
  z-index: ${props => props.match ? "1" : "0" }
  width: 50%;
`;

const Header = styled.header`
  
`;

const Name = styled.h1`
  cursor: pointer;
  display: inline;
  font-size: 1.6rem;
  font-weight: 400;
`

const Person = ({activeContact, person, id, updateActiveContact}) => {
  return (
    <Div
      match={activeContact === id}
    >
      <Header onClick={() => updateActiveContact(id)}>
        <Name>{` ${person.name.last.toUpperCase()}, ${person.name.first} `}</Name>
      </Header>
      <Card
        name={person.name}
        picture={person.picture}
        email={person.email}
        phone={person.phone}
        location={person.location}
        id={id}
        activeContact={activeContact}
      />
    </Div>
  )
}

export default Person