import React from 'react';
import { render } from '@testing-library/react'
import Info from './Info';

describe('<Info />', () => {
  const info = (
    <Info
      info="email"
      data="molly.allen@example.com"
    />
  )
  it('renders successfully', () => {
    render(info);
  });

  it('displays contacts info', () => {
    const { getByText } = render(info);
    getByText(/molly.allen@example.com/i);
  });
});
