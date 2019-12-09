import React from 'react';
import Person from './Person/Person'
import styled from 'styled-components'

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`

const ContactGroup = ({ index, contacts }) => {
  return (
    <section>
      <header>
        <h1>{index}</h1>
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
    </section>
  )
}

export default ContactGroup;