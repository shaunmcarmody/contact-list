import React from 'react';
import styled from 'styled-components';

const Text = styled.p`
  font-size: 1.4rem;
  line-height: 1.8rem;
`;

const Span = styled.span`
  font-weight: 500;
`;

const Info = ({info, data}) => {
  return (
    <Text><Span>{ info }: </Span>{ data }</Text>
  )
}

export default Info;