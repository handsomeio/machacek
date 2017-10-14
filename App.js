import React, { Component } from 'react';

import { AppStack } from './src/navigation/router';
import i18n from './src/i18n/';

class App extends Component {
  render() {
    return <AppStack />;
  }
}

export default App;
