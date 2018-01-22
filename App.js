import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from './components/header';
import {Description} from './components/description'
import {Article} from './components/articles'

class App extends Component {
  render() {
    return (
    <div>
      <div>
      <Header />
      </div>

      < div >
      <Description />
      </div>

      <div class = 'article'>
      <Article />
      </div>

    </div>
    );
  }
}

export default App;
