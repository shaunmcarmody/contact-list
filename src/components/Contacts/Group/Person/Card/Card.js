import React from 'react';
import styled from 'styled-components';

const Image = styled.div`
  background: ${props => `url(${props.src}) center no-repeat`}
  background-size: 80px;
  border-radius: 50%;
  height: 80px;
  width: 80px;
`;

const Section = styled.section`
  background-color: blue;
  display: ${props => props.match ? "block" : "none" }
  height: 100px;
  padding: 10px;
  positon: absolute;
`;

const Info = ({ activeContact, name, picture, email, phone, location, id }) => {
  return (
    <Section match={activeContact === id}>
      <Image src={picture.medium} />
    </Section>
  )
}

export default Info;