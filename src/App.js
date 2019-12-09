import React, { Component } from 'react';
import axios from 'axios';
import ContactList from './components/ContactList/ContactList';
import './App.css';

class App extends Component {
  state = {
    contacts: {},
    message: ''
  }
  componentDidMount() {
    axios
      .get('https://randomuser.me/api/?results=120&nat=gb&inc=name,picture,email,phone,location')
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
    list.forEach(el => {
      const index = el.name.last[0]
      contacts[index].push(el)
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
      <div className="App">
        <ContactList contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;
