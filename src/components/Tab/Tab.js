import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button`
  background-color: ${props => props.active ? '#f3f3f3' : '#EDEDED'}
  border: 1px solid grey;
  border-bottom: ${props => props.active ? '1px solid #f3f3f3' : '1px solid grey'}
  border-radius: 5px 5px 0 0;
  color: ${props => props.active ? 'black' : 'grey'}
  cursor: pointer;
  display: block;
  font-size: 2rem;
  flex: 1;
  padding: 0;
  padding-bottom: 5px;
  text-align: center;

  @media(max-width: 700px) {
    border: 1px solid grey;
    border-right: ${props => props.active ? '1px solid #f3f3f3' : '1px solid grey'}
    border-radius: 0 5px 0 0;
    font-size: 2rem;
  }

  &:focus {
    outline: 0;
  }
`

const SPAN = styled.span`
  display: block;
  font-size: 1.2rem;
  padding-right: 2px;
  text-align: right;

  @media(max-width: 700px) {
    font-size: 1.2rem;
  }
`


const Tab = ({ activeTab, letter, entries, updateActiveGroup }) => {
  return (
    <Button
      active={activeTab === letter}
      data-testid="tab-element"
      onClick={() => updateActiveGroup(letter)}
    >
      <SPAN>{entries}</SPAN>
      {letter}
    </Button>
  )
}

Tab.propTypes = {
  activeTab: PropTypes.string,
  letter: PropTypes.string,
  entries: PropTypes.number,
  updateActiveGroup: PropTypes.func
}

export default Tab