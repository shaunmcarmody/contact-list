import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  border: 1px solid black;
  border-bottom: ${props => props.active ? '1px solid white' : '1px solid black'}
  border-radius: 5px 5px 0 0;
  cursor: pointer;
  flex: 1;
  padding-bottom: 5px;
`

const Entries = styled.p`
  color: ${props => props.active ? 'black' : 'grey'}
  font-size: 1.2rem;
  margin-right: 5%;
  text-align: right;
`

const Letter = styled.p`
  color: ${props => props.active ? 'black' : 'grey'}
  font-size: 2rem;
  text-align: center;
`

const Tab = ({ activeTab, letter, entries, updateActiveGroup }) => {
  return (
    <Div
      active={activeTab === letter}
      onClick={() => updateActiveGroup(letter)}
    >
      <Entries
        active={activeTab === letter}
      >
        {entries}
      </Entries>
      <Letter
        active={activeTab === letter}
      >
        {letter}
      </Letter>
    </Div>
  )
}

export default Tab