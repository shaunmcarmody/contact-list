import React from 'react';
import { render } from '@testing-library/react'
import Tab from './Tab';

describe('<Tab />', () => {
  const tab = (
    <Tab
      letter="A"
      entries="26"
    />
  )
  it('renders successfully', () => {
    render(tab);
  });

  it('renders letter prop', () => {
    const { getByText } = render(tab);
    getByText(/A/i);
  });

  it('renders entries prop', () => {
    const { getByText } = render(tab);
    getByText(/26/i);
  });
});
