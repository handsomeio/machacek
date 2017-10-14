import React, { Component } from 'react';

import { AppStack } from './src/navigation/router';
import i18n from './src/lib/i18n/index';

class App extends Component {
  render() {
    return <AppStack />;
  }
}

export default App;
