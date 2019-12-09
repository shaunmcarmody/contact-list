import React from 'react';
import Person from './Person/Person'
import styled from 'styled-components'

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`

const Section = styled.section`
  display: ${props => props.display ? "block" : "none" }
`;

const ContactGroup = ({ activeContact, activeGroup, contacts, letter }) => {
  return (
    <Section display={letter === activeGroup}>
      <header>
        <h1>{letter}</h1>
      </header>
      <List>
        {
          contacts && contacts.map(person => (
            <Person
              email={person.email}
              phone={person.phone}
              location={person.location}
              name={person.name}
              picture={person.picture}
            />
          ))
        }
      </List>
    </Section>
  )
}

export default ContactGroup;