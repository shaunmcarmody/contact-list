import React from 'react';
import { render } from '@testing-library/react'
import Person from './Person';

describe('<Person />', () => {
  const person = (
    <Person
      person={
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
      }
    />
  )

  it('renders person name', () => {
    const { getAllByText } = render(person)
    expect(getAllByText(/ALLEN, Molly/i).length).toBe(2)
  })

  it('renders successfully', () => {
    render(person);
  });

  it('renders person email', () => {
    const { getByText } = render(person)
    getByText(/molly.allen@example.com/i)
  })

  it('renders person phone number', () => {
    const { getByText } = render(person)
    getByText(/016974 44617/i)
  })

  it('renders person street', () => {
    const { getByText } = render(person)
    getByText(/5036 School Lane/i)
  })

  it('renders person city', () => {
    const { getByText } = render(person)
    getByText(/Chester/i)
  })

  it('renders person state', () => {
    const { getByText } = render(person)
    getByText(/Cheshire/i)
  })

  it('renders person state', () => {
    const { getByText } = render(person)
    getByText(/P7 7HD/i)
  })
});
