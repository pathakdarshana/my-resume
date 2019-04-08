import React, {Component} from 'react';

import { Header, Body , Footer } from './components';

export default class App extends Component {
    render () {
      return (
        <div>
          <Header />
          <Body />
          <Footer />
        </div>
      )
    }
}
