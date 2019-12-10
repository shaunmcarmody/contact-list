import React from 'react';
import { render } from '@testing-library/react'
import Tabs from './Tabs';

describe('<Tabs />', () => {
  const tabs = (
    <Tabs
      contacts={{
        'A': [
          {
            email: "molly.allen@example.com",
            id: {
              name: "NINO",
              value: "HZ 11 30 62 W"
            },
            location: {
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
            },
            name: {
              first: "Molly",
              last: "Allen",
              title: "Miss",
            },
            phone: "016974 44617",
            picture: {
              medium: "https://randomuser.me/api/portraits/med/women/33.jpg"
            }
          }
        ]
      }}
    />
  )
  it('renders successfully', () => {
    render(tabs);
  });

  it('it renders entries prop', () => {
    const { getByText } = render(tabs);
    getByText(/A/i);
  });
});
