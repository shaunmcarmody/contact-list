import React from 'react';
import styled from 'styled-components';

const Aside = styled.div`
`;

const Button = styled.button`
`;

const Div = styled.div`
`

const Header = styled.header`
`;

const Image = styled.div`
  background: ${props => `url(${props.src}) center no-repeat`}
  background-size: 80px;
  border-radius: 50%;
  height: 80px;
  width: 80px;
`;

const Info = styled.p`
`;

const Section = styled.section`
  background-color: white;
  display: ${props => props.match ? "flex" : "none"}
  height: 100px;
  padding: 10px;
  positon: absolute;
`;

const Card = ({ activeContact, closeContact, name, picture, email, phone, location, id }) => {
  return (
    <Section match={activeContact === id}>
      <Aside>
        <Button
          onClick={closeContact}
        >
          x
        </Button>
        <Image src={picture.medium} />
      </Aside>
      <Div>
        <Header>
          {` ${name.last.toUpperCase()}, ${name.first} `}
        </Header>
        <Info>
          email: {email}
        </Info>
        <Info>
          phone: {phone}
        </Info>
        <Info>
          street: {` ${location.street.number} ${location.street.name} `}
        </Info>
        <Info>
          city: {location.city}
        </Info>
        <Info>
          state: {location.state}
        </Info>
        <Info>
          postcode: {location.postcode}
        </Info>
      </Div>

    </Section>
  )
}

export default Card;