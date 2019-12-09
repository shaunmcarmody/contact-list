import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    contacts: [],
    message: ''
  }
  componentDidMount() {
    axios
      .get('https://randomuser.me/api/?results=120')
      .then(({ data }) => this.sortData(data))
      .catch(({ message }) => {
        this.setState({ message })
      });
  }

  sortData(data) {
    const contacts = data.results.sort((a, b) => {
      const nameA = `${a.name.last}, ${a.name.first}`
      const nameB = `${b.name.last}, ${b.name.first}`
      return nameA.localeCompare(nameB)
    })
    this.setState({ contacts })
  }

  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;
