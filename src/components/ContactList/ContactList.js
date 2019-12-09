import React from 'react';
import ContactGroup from './ContactGroup/ContactGroup'

const ContactList = ({ contacts }) => {
  return (
    <div>
      {
        contacts && Object.entries(contacts).map(el => ( // logical && operator prevents entries method running on undefined contacts variable
          <ContactGroup
            index={el[0]}
            contacts={el[1]}
            key={el[0]}
          />
        ))
      }
    </div>
  )
}

export default ContactList;