import React from 'react';
import styled from 'styled-components'
import Card from './Card/Card';

const Div = styled.div`
  border-bottom: 1px solid rgba(33, 34, 64, 0.16);
  display: block;
  height: 25px;
  margin-top: 10px;
  margin-right: 10px;
  z-index: ${props => props.match ? "1" : "0" }
  width: calc(50% - 20px);

  @media(max-width: 700px) {
    width: 100%;
  }
`;

const Name = styled.h1`
  cursor: pointer;
  display: inline;
  font-size: 1.6rem;
  font-weight: 400;
`

const Person = ({activeContact, closeContact, person, id, updateActiveContact}) => {
  return (
    <Div
      match={activeContact === id}
    >
      <header onClick={() => updateActiveContact(id)}>
        <Name>{` ${person.name.last.toUpperCase()}, ${person.name.first} `}</Name>
      </header>
      {
        activeContact === id && (
          <Card
            closeContact={closeContact}
            name={person.name}
            picture={person.picture}
            email={person.email}
            phone={person.phone}
            location={person.location}
            id={id}
            activeContact={activeContact}
          />
        )
      }
    </Div>
  )
}

export default Person