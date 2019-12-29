import React from 'react';
import Group from './Group/Group';
import styled from 'styled-components';

const Main = styled.main`
  background-color: #f3f3f3;

  @media(max-width: 700px) {
    padding: 40px;
    width: 100%;
  }

  @media(min-width: 701px) {
    border-bottom: 1px solid grey;
    border-left: 1px solid grey;
    border-right: 1px solid grey;
    border-radius: 0 0 5px 5px;
    min-height: 300px;
    padding: 10px;
  }
`;

const Contacts = ({ activeContact, closeContact, contacts, updateActiveContact }) => {
  return (
    <Main>
      <Group
        activeContact={activeContact}
        closeContact={closeContact}
        contacts={contacts}
        updateActiveContact={updateActiveContact}
      />
    </Main>
  )
}

export default Contacts