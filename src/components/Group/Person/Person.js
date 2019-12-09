import React from 'react';
import styled from 'styled-components'

const Item = styled.li`
  display: block;
  width: 50%;
`;

const Person = ({email, phone, location, name, picture}) => {
  return (
    <>
      <Item>{`${name.last.toUpperCase()}, ${name.first}`}</Item>
    </>
  )
}

export default Person