import React from 'react';
import styled from 'styled-components';

const HorizontalList = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style-type: none;
`

const Header = () => (
  <div>
    <HorizontalList>
      <li>Home</li>
      <li>About</li>
      <li>Resume</li>
      <li>Contact</li>
    </HorizontalList>
  </div>
);

export default Header;
