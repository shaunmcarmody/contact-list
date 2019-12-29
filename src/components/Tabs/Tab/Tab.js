import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: ${props => props.active ? '#f3f3f3' : '#EDEDED'}
  border: 1px solid grey;
  border-bottom: ${props => props.active ? '1px solid #f3f3f3' : '1px solid grey'}
  border-radius: 5px 5px 0 0;
  cursor: pointer;
  flex: 1;
  padding-bottom: 5px;
  color: ${props => props.active ? 'black' : 'grey'}
  font-size: 2rem;
  text-align: center;

  @media(max-width: 700px) {
    border: 1px solid grey;
    border-right: ${props => props.active ? '1px solid #f3f3f3' : '1px solid grey'}
    border-radius: 0 5px 0 0;
  }
`

const Entries = styled.p`
  color: ${props => props.active ? 'black' : 'grey'}
  font-size: 1.2rem;
  margin-right: 5%;
  text-align: right;
`

const Tab = ({ activeTab, letter, entries, updateActiveGroup }) => {
  return (
    <Button
      active={activeTab === letter}
      data-testid="tab-element"
      onClick={() => updateActiveGroup(letter)}
    >
      <Entries
        active={activeTab === letter}
      >
        {entries}
      </Entries>
      {letter}
    </Button>
  )
}

export default Tab