import React from 'react';
import { render } from '@testing-library/react'
import Person from './Person';

describe('<Person />', () => {
  it.skip('renders successfully', () => {
    render(<Person />);
  });
});
