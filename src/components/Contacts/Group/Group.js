import React from 'react';
import Person from './Person/Person'
import styled from 'styled-components'

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`

const Section = styled.section`
  display: ${props => props.match ? "block" : "none" }
`;

const Group = ({ activeContact, activeGroup, contacts, letter, updateActiveContact }) => {
  return (
    <Section match={letter === activeGroup}>
      <header>
        <h1>{letter}</h1>
      </header>
      <List>
        {
          contacts && contacts.map(person => (
            <Person
              activeContact={activeContact}
              email={person.email}
              phone={person.phone}
              location={person.location}
              name={person.name}
              picture={person.picture}
              id={`${person.id.name} ${person.id.value}`}
              key={`${person.id.name} ${person.id.value}`}
              updateActiveContact={updateActiveContact}
            />
          ))
        }
      </List>
    </Section>
  )
}

export default Group;