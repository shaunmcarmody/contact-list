import React from 'react';
import { render } from '@testing-library/react'
import Card from './Card';

describe('<Card />', () => {
  const card = (
    <Card
      name={{ first: "Molly", last: "Allen", title: "Miss", }}
      picture={{ medium: "https://randomuser.me/api/portraits/med/women/33.jpg" }}
      email="molly.allen@example.com"
      phone="016974 44617"
      location={{
        city: "Chester",
        coordinates: {
          latitude: "79.2340",
          longitude: "-54.6930"
        },
        country: "United Kingdom",
        postcode: "P7 7HD",
        state: "Cheshire",
        street: {
          name: "School Lane",
          number: 5036
        },
      }}
    />
  )

  it('renders successfully', () => {
    render(card);
  });

  it('renders person name', () => {
    const { getByText } = render(card)
    getByText(/ALLEN, Molly/i)
  })

  it('renders person email', () => {
    const { getByText } = render(card)
    getByText(/molly.allen@example.com/i)
  })

  it('renders person phone number', () => {
    const { getByText } = render(card)
    getByText(/016974 44617/i)
  })

  it('renders person street', () => {
    const { getByText } = render(card)
    getByText(/5036 School Lane/i)
  })

  it('renders person city', () => {
    const { getByText } = render(card)
    getByText(/Chester/i)
  })

  it('renders person state', () => {
    const { getByText } = render(card)
    getByText(/Cheshire/i)
  })

  it('renders person state', () => {
    const { getByText } = render(card)
    getByText(/P7 7HD/i)
  })
});
