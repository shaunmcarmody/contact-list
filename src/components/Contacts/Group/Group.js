import React from 'react';
import Person from './Person/Person'
import styled from 'styled-components'

const Div = styled.div`
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
      <Div>
        {
          contacts && contacts.map(person => (
            <Person
              activeContact={activeContact}
              person={person}
              id={`${person.id.name} ${person.id.value}`}
              key={`${person.id.name} ${person.id.value}`}
              updateActiveContact={updateActiveContact}
            />
          ))
        }
      </Div>
    </Section>
  )
}

export default Group;