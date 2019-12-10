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
});
