import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
constructor(props){
  super(props);

  this.name = "Apple time";
}

nameMachine(name){
  return "Hi " + name +"!";
}

  render() {
    const myName = "Rick";
    return (
      <div className="App">
        <h1>My sample data is: {this.nameMachine(myName) + " " + this.name} </h1>
      </div>
    );
  }
}

export default App;
