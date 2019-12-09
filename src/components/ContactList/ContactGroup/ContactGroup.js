import React from 'react';
import Person from './Person/Person'

const ContactGroup = ({ index, contacts }) => {
  return (
    <section>
      <header>
        <h1>{index}</h1>
      </header>
      <main>
        {
          contacts.map(el => <Person />)
        }
      </main>
    </section>
  )
}

export default ContactGroup;