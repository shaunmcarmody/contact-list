import React from 'react';
import { render } from '@testing-library/react'
import ContactList from './ContactList';

describe('<ContactList />', () => {
  it('renders successfully', () => {
    render(<ContactList />);
  });
});
