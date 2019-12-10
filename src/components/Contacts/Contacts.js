import React from 'react';
import Group from './Group/Group';
import styled from 'styled-components';

const Main = styled.main`
  background-color: #f3f3f3;
  border-bottom: 1px solid grey;
  border-left: 1px solid grey;
  border-right: 1px solid grey;
  border-radius: 0 0 5px 5px;
  min-height: 300px;
  padding: 40px;
`;

const Contacts = ({ activeContact, activeGroup, closeContact, contacts, updateActiveContact }) => {
  return (
    <Main>
      {
        contacts && Object.entries(contacts).map(entry => (
          <Group
            activeContact={activeContact}
            activeGroup={activeGroup}
            closeContact={closeContact}
            letter={entry[0]}
            contacts={entry[1]}
            key={entry[0]}
            updateActiveContact={updateActiveContact}
          />
        ))
      }
    </Main>
  )
}

export default Contacts