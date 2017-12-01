import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      friends: [],
      picture: '',
      name: '',
    }
  }
  render() {
    
     
     
    return (
      <div>
      <span>Picture:</span>
Picture :
       <input />
       Name:
        <input />

        <button className="buttom">Add a friend</button>
      </div>
    );
  }
}

export default App;
