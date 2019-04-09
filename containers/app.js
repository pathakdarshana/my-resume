import React, {Component} from 'react';
import styled from 'styled-components';

import Header from './components/header';
import Footer from './components/footer';
import Body from './components/body';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-image: url(https://unsplash.com/photos/AyOJr_utkIE);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`

export default class App extends Component {
    render () {
      return (
        <Container>
          <Header />
          <Body />
          <Footer />
        </Container>
      )
    }
}
