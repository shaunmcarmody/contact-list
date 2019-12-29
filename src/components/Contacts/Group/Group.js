import React from 'react';
import Person from './Person/Person'
import styled from 'styled-components'

const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

const Group = ({ activeContact, closeContact, contacts, updateActiveContact }) => {
  return (
    <Section>
      {
        contacts && contacts.map(person => (
          <Person
            activeContact={activeContact}
            closeContact={closeContact}
            person={person}
            id={`${person.id.name} ${person.id.value}`}
            key={`${person.id.name} ${person.id.value}`}
            updateActiveContact={updateActiveContact}
          />
        ))
      }
    </Section>
  )
}

export default Group;