import React from 'react';
import Group from './Group/Group';

const Contacts = ({ activeContact, activeGroup, contacts, updateActiveContact }) => {
  return (
    <main>
      {
        contacts && Object.entries(contacts).map(entry => (
          <Group
            activeContact={activeContact}
            activeGroup={activeGroup}
            letter={entry[0]}
            contacts={entry[1]}
            key={entry[0]}
            updateActiveContact={updateActiveContact}
          />
        ))
      }
    </main>
  )
}

export default Contacts