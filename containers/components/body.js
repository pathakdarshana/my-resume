import React from 'react';
import styled from 'styled-components';

const BodyContainer = styled.div`
  flex : 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const HorizontalList = styled.ul`
  width: 100%;
  display: flex;
  list-style-type: none;
  justify-content: space-around;
`

const CenterText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 60px;
`
const Footer = () => (
  <HorizontalList>
    <li><i className="fab fa-facebook fa-lg"></i></li>
    <li><i className="fab fa-linkedin fa-lg"></i></li>
    <li><i className="fab fa-twitter fa-lg"></i></li>
    <li><i className="fab fa-github fa-lg"></i></li>
  </HorizontalList>
);

const Body = () => (
  <BodyContainer>
    <CenterText>I'm Darshana Pathak.</CenterText>
    <Footer />
  </BodyContainer>
);

export default Body;
