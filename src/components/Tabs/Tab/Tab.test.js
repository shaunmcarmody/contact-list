import React from 'react';
import { render } from '@testing-library/react'
import Tab from './Tab';

describe('<Tab />', () => {
  it('renders successfully', () => {
    render(<Tab />);
  });

  it('it displays letter prop', () => {
    const { getByText } = render(<Tab letter="A" />);
    getByText(/A/i);
  });

  it('it displays entries prop', () => {
    const { getByText } = render(<Tab entries="26" />);
    getByText(/26/i);
  });


});
