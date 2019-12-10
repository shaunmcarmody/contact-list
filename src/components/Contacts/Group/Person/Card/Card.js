import React from 'react';
import Info from './Info/Info';
import styled from 'styled-components';

const Aside = styled.div`
  width: 120px;

  @media(max-width: 900px) {
    width: 60px;
  }
`;

const Button = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 20px;
  margin-left: 10px;
`;

const Div = styled.div`
  margin-top: 18px;
`

const Header = styled.h1`
  font-size: 1.6rem;
  font-weight: 400;
  margin-bottom: 10px;
`;

const Image = styled.div`
  background: ${props => `url(${props.src}) center no-repeat`}
  background-size: 80px;
  border-radius: 50%;
  display: block;
  height: 80px;
  margin: auto;
  width: 80px;

  @media(max-width: 900px) {
    background-size: 40px;
    height: 40px;
    width: 40px;
  }
`;

const Section = styled.section`
  background-color: white;
  border: 1px solid rgba(33, 34, 64, 0.16);
  display: ${props => props.match ? "flex" : "none"}
  min-height: 100px;
  margin-top: 8px;
  padding: 10px 0;
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
        <Info info="email" data={email} />
        <Info info="phone" data={phone} />
        <Info info="street" data={` ${location.street.number} ${location.street.name} `} />
        <Info info="city" data={location.city} />
        <Info info="state" data={location.state} />
        <Info info="postcode" data={location.postcode} />
      </Div>
    </Section>
  )
}

export default Card;