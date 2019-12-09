import React, { Component } from 'react';
import axios from 'axios';
import Tabs from './components/Tabs/Tabs';
import Contacts from './components/Contacts/Contacts';

class App extends Component {
  state = {
    contacts: {},
    active: {
      group: 'A',
      contact: null
    },
    message: ''
  }
  componentDidMount() {
    axios
      .get('https://randomuser.me/api/?results=120&nat=gb&inc=name,picture,email,phone,location,id')
      .then(({ data }) => this.sortData(data))
      .catch(({ message }) => {
        this.setState({ message })
      });
  }

  batchContacts(list) {
    const contacts = {}
    for (let i = 0; i < 26; i ++) {
      contacts[String.fromCharCode(65 + i)] = [] // generates A-Z property keys
    }
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
      <>
        <Tabs
          activeTab={this.state.active.group}
          contacts={this.state.contacts}
          updateActiveGroup={this.updateActiveGroup}
        />
        <Contacts
          activeContact={this.state.active.contact}
          activeGroup={this.state.active.group}
          contacts={this.state.contacts}
          updateActiveContact={this.updateActiveContact}
        />
      </>
    );
  }
}

export default App;
