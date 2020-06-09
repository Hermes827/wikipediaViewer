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
      clickedSearch: false,
      array: [],
      searchBarClass: ""
    }

    this.toggleState = this.toggleState.bind(this)
    this.toggleClickedSearch = this.toggleClickedSearch.bind(this)
    this.toggleSearchBarClass = this.toggleSearchBarClass.bind(this)
  }

  toggleState(){
    (this.state.hasClickedButton === true) ? this.setState({hasClickedButton: false}) : this.setState({hasClickedButton: true})
  }

  //turns out that the problem was that in the searchbar component I was writing "this.props.togglestate" instead of
  //writing "this.props.toggle" which is the term I used when passing down the function "toggle={this.toggleState}"

  randomArticle(){
    window.open("https://en.wikipedia.org/wiki/Special:Random")
  }

  renderH3(){
    if(this.state.clickedSearch === false){
      return(
        <h3>Click icon to search</h3>
      )
    }
  }

  toggleClickedSearch(){
    this.setState({
      clickedSearch: true
    })
  }

  toggleSearchBarClass(){
    this.setState({
      searchBarClass: "searchExecuted"
    })
  }

  render(){
  return (
    <div className="App">
    <div className={this.state.searchBarClass}>
    <h3 onClick={this.randomArticle}>Click here for a random article</h3>
    {(this.state.hasClickedButton ===true) ? <Searchbar
                                              toggle={this.toggleState}
                                              clickedSearch={this.toggleClickedSearch}
                                              toggleClass={this.toggleSearchBarClass}
                                              /> : <img className="glass" src={glass} onClick={this.toggleState}></img>}
    {this.renderH3()}
    {console.log(this.state)}
    </div>
    </div>
  );
}
}

export default App;
