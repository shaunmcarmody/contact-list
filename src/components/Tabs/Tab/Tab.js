import React from 'react';

const Tab = ({ activeTab, letter, entries, updateActiveGroup }) => {
  return (
    <div onClick={() => updateActiveGroup(letter)}>
      <p>{letter}</p>
    </div>
  )
}

export default Tab