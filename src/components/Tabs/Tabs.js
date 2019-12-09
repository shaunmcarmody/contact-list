import React from 'react';
import Tab from './Tab/Tab';
import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
`;

const Tabs = ({ activeTab, contacts, updateActiveGroup }) => {
  return (
    <Header>
      {
        contacts && Object.entries(contacts).map(group => (
          <Tab
            activeTab={activeTab}
            letter={group[0]}
            entries={group[1].length}
            key={group[0]}
            updateActiveGroup={updateActiveGroup}
          />
        ))
      }
    </Header>
  )
}

export default Tabs;