import React from 'react';
import { render } from '@testing-library/react'
import Contacts from './Contacts';

describe('<Contacts />', () => {
  it('renders successfully', () => {
    render(<Contacts />);
  });
});
