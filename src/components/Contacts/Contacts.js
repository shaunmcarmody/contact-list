import React from 'react';
import Person from '../Person/Person';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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

const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;


const Contacts = ({ activeContact, closeContact, contacts, updateActiveContact }) => {
  return (
    <Main>
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
    </Main>
  )
}

Contacts.propTypes = {
  activeContact: PropTypes.string,
  closeContact: PropTypes.func,
  contacts: PropTypes.array,
  updateActiveContact: PropTypes.func
}

export default Contacts