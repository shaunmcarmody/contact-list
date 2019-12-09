import React from 'react';
import { render } from '@testing-library/react'
import ContactList from './ContactList';

describe('<App />', () => {
  it('renders successfully', () => {
    render(<ContactList />);
  });
});
