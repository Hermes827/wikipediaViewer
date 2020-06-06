import React from 'react';
import logo from './logo.svg';
import './App.css';
import glass from './pictures/glass.svg.png'
import Searchbar from './components/searchbar.js'
const wikiAPI = "https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&generator=search&gsrnamespace=0&gsrlimit=5&gsrsearch=%27New_England_Patriots%27"

class App extends React.Component {

  constructor(){
    super()
    this.state = {
      hasClickedButton: false,
      array: []
    }

    this.toggleState = this.toggleState.bind(this)
  }

  toggleState(){
    (this.state.hasClickedButton === true) ? this.setState({hasClickedButton: false}) : this.setState({hasClickedButton: true})
  }

  randomArticle(){
    window.open("https://en.wikipedia.org/wiki/Special:Random")
  }

  render(){
  return (
    <div className="App">
    <h3 onClick={this.randomArticle}>Click here for a random article</h3>
    {(this.state.hasClickedButton ===true) ? <Searchbar toggle={this.toggleState}/> : <img className="glass" src={glass} onClick={this.toggleState}></img>}
    <h3>Click icon to search</h3>
    </div>
  );
}
}

export default App;
