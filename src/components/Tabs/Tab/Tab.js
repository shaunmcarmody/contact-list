import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  background-color: ${props => props.active ? '#f3f3f3': '#EDEDED'}
  border: 1px solid grey;
  border-bottom: ${props => props.active ? '1px solid #f3f3f3' : '1px solid grey'}
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