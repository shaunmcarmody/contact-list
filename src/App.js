import React, { Component } from 'react';
import axios from 'axios';
import Tabs from './components/Tabs/Tabs';
import Contacts from './components/Contacts/Contacts';
import styled from 'styled-components';

const ContactList = styled.div`
  @media(max-width: 700px) {
    display: flex;
    min-height: 100vh;
    width: 100%;
  }

  @media(min-width: 701px) {
    border-radius: 4px;
    margin: auto;
    margin-top: 100px;
    max-width: 1088px;
    max-height: 600px;
    width: calc(100% - 64px);
  }
`;

class App extends Component {
  state = {
    contacts: {},
    active: {
      group: 'A',
      contact: null
    },
    message: ''
  }
  async componentDidMount() {
    try {
      const { data } = await axios('https://randomuser.me/api/?results=120&nat=gb&inc=name,picture,email,phone,location,id')
      this.sortData(data)
    } catch ({ message }) {
      this.setState({ message })
    }
  }

  batchContacts(list) {
    const contacts = {}
    const tabs = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    tabs.forEach(el => {
      contacts[el.toUpperCase()] = []
    })
    list.forEach(contact => {
      const index = contact.name.last[0]
      contacts[index].push(contact)
    })
    this.setState(prevState => ({
      ...prevState,
      contacts
    }));
  }

  sortData(data) {
    const contacts = data.results.sort((a, b) => {
      const nameA = `${a.name.last}, ${a.name.first}`
      const nameB = `${b.name.last}, ${b.name.first}`
      return nameA.localeCompare(nameB)
    })
    this.batchContacts(contacts);
  }

  closeContact = () => {
    this.setState(prevState => ({
      ...prevState,
      active: {
        ...prevState.active,
        contact: null
      }
    }));
  }

  updateActiveGroup = letter => {
    this.setState(prevState => ({
      ...prevState,
      active: {
        ...prevState.active,
        group: letter
      }
    }));
  }

  updateActiveContact = id => {
    this.setState(prevState => ({
      ...prevState,
      active: {
        ...prevState.active,
        contact: id
      }
    }));
  }

  render() {
    return (
      <ContactList>
        <Tabs
          activeTab={this.state.active.group}
          contacts={this.state.contacts}
          updateActiveGroup={this.updateActiveGroup}
        />
        <Contacts
          activeContact={this.state.active.contact}
          closeContact={this.closeContact}
          contacts={this.state.contacts[this.state.active.group]}
          updateActiveContact={this.updateActiveContact}
        />
      </ContactList>
    );
  }
}

export default App;
