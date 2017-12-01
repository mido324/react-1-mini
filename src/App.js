import React, { Component } from 'react';

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

updatePicture(value) {
this.setState({
  picture: value
})
}
updateName(value) {
  this.setState({
    name: value
  })
}

  render() {
    
     
     
    return (
      <div>
      <span>Picture:</span>
Picture :
       <input onChange={event => this.updatePicture(event.target.value)} value = {this.state.picture} />
       Name:
        <input onChange={event => this.updateName(event.target.value)} value ={this.state.name}/>

        <button className="buttom">Add a friend</button>
        state: {JSON.stringify(this.state)}
      </div>
    );
  }
}

export default App;
