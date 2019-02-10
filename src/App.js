import React, { Component } from 'react';
import Header from './components/Header'
import Contacts from './components/Contacts'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Provider} from './context'
class App extends Component {
  render() {
    return (
      <Provider>
      <div className="App">
      <Header />
      <div className="container">
      <Contacts />
      </div>
      </div>
      </Provider>
    );

  }
}

export default App;
