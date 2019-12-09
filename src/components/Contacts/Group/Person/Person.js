import React from 'react';
import styled from 'styled-components'

const Item = styled.li`
  display: block;
  width: 50%;
`;

const Section = styled.section`
  display: ${props => props.match ? "block" : "none" }
`;

const Person = ({activeContact, id, email, phone, location, name, picture, updateActiveContact}) => {
  return (
    <>
      <Item onClick={() => updateActiveContact(id)} >
        {` ${name.last.toUpperCase()}, ${name.first} `}
      </Item>
      <Section match={id === activeContact}>
        <div>hsghsdghakshgdakshdgjakhsgdjahgkshsgkd</div>
      </Section>
    </>
  )
}

export default Person