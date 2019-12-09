import React from 'react';
import { render } from '@testing-library/react'
import ContactGroup from './ContactGroup';

describe('<ContactGroup />', () => {
  it('renders successfully', () => {
    render(<ContactGroup />);
  });
});
