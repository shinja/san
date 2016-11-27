import React, { Component } from 'react';
import '../node_modules/semantic-ui-css/semantic.min.css';
import './App.css';

import ConfirmExampleConfirm from './Form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ConfirmExampleConfirm />
      </div>
    );
  }
}

export default App;
