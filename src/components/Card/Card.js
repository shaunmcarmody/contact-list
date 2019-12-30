import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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

const Span = styled.span`
  font-weight: 500;
`;

const Section = styled.section`
  background-color: white;
  border: 1px solid rgba(33, 34, 64, 0.16);
  display: flex;
  min-height: 100px;
  margin-top: 8px;
  padding: 10px 0;
  positon: absolute;
`;

const Text = styled.p`
  font-size: 1.4rem;
  line-height: 1.8rem;
`;




const Card = ({ closeContact, name, picture, email, phone, location }) => {
  return (
    <Section>
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
        <Text><Span>email: </Span>{email}</Text>
        <Text><Span>phone: </Span>{phone}</Text>
        <Text><Span>street: </Span>{` ${location.street.number} ${location.street.name} `}</Text>
        <Text><Span>city: </Span>{location.city}</Text>
        <Text><Span>state: </Span>{location.state}</Text>
        <Text><Span>postcode: </Span>{location.postcode}</Text>
      </Div>
    </Section>
  )
}

Card.propTypes = {
  closeContact: PropTypes.func,
  name: PropTypes.objectOf(PropTypes.string),
  picture: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
  location: PropTypes.object,
}

export default Card;