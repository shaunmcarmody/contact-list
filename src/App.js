import React, { Component } from 'react';
import axios from 'axios';
import Tab from './components/Tab/Tab';
import Group from './components/Group/Group';

class App extends Component {
  state = {
    contacts: {},
    active: {
      group: null,
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
    this.batchContacts(contacts)
  }

  render() {
    return (
      <>
        <header>
          {
            Object.entries(this.state.contacts).map(group => (
              <Tab
                activeTab={this.state.active.group}
                letter={group[0]}
                entries={group[1].length}
                key={group[0]}
              />
            ))
          }
        </header>
        <main>
          {
            Object.entries(this.state.contacts).map(entry => (
              <Group
                activeContact={this.state.active.contact}
                activeGroup={this.state.active.group}
                letter={entry[0]}
                contacts={entry[1]}
                key={entry[0]}
              />
            ))
          }
        </main>
      </>
    );
  }
}

export default App;
