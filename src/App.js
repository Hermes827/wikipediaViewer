import React from 'react';
import logo from './logo.svg';
import './App.css';
import glass from './pictures/glass.svg.png'

class App extends React.Component {

  constructor(){
    super()
  }

  hello(){
    console.log("hello")
  }

  render(){
  return (
    <div className="App">
    <h3>Click here for a random article</h3>
    <img className="glass" src={glass} onClick={this.hello}></img>
    <h3>Click icon to search</h3>
    </div>
  );
}
}

export default App;
