import React from 'react';
import { render } from '@testing-library/react'
import axios from 'axios';
import App from './App';

describe('<App />', () => {
  it('will get results from api', async () => {
    expect.assertions(1);
    const { data } = await axios.get('https://randomuser.me/api/?results=120&nat=gb&inc=name,picture,email,phone,location,id')
    expect(data.results.length).toBe(120);
  });

  it('renders successfully', () => {
    render(<App />)
  });
});
