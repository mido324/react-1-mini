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


addFriend (){
this.setState({
   picture: '',
   name: '',
   friends: [...this.state.friends, {
     picture: this.state.picture,
     name: this.state.name
   }]
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

        <button onClick={() => this.addFriend()} >Add a friend</button>
       
       <div>
       {this.state.friends.map(friend => (
         <div>
         <img src={friend.picture} width="100px"/> 
         </div>
       ))}
         </div>
        state: {JSON.stringify(this.state)}

      </div>
    );
  }
}

export default App;
