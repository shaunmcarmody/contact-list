import React from 'react';
import Tab from './Tab/Tab';
import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
`;

const Tabs = ({ activeTab, contacts }) => {
  return (
    <Header>
      {
        contacts && Object.entries(contacts).map(group => (
          <Tab
            activeTab={activeTab}
            letter={group[0]}
            entries={group[1].length}
            key={group[0]}
          />
        ))
      }
    </Header>
  )
}

export default Tabs;