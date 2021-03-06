import React from 'react';
import logo from './logo.svg';
import './App.css';
import glass from './pictures/glass.svg.png'
import Searchbar from './components/searchbar.js'
// import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {

  constructor(){
    super()
    this.state = {
      hasClickedButton: false,
      clickedSearch: false,
      array: [],
      searchBarClass: "",
      H3class: ""
    }

    this.toggleState = this.toggleState.bind(this)
    this.toggleClickedSearch = this.toggleClickedSearch.bind(this)
    this.toggleClickedSearch1 = this.toggleClickedSearch1.bind(this)
    this.toggleSearchBarClass = this.toggleSearchBarClass.bind(this)
    this.renderH3 = this.renderH3.bind(this)
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

  toggleClickedSearch1(){
    this.setState({
      clickedSearch: false,
      searchBarClass: ""
    })
  }

  toggleSearchBarClass(){
    this.setState({
      searchBarClass: "searchBox"
    })
  }

  // toggleH3Class(){
  //   this.setState({
  //     H3class: "H3gone"
  //   })
  //   console.log("h3")
  // }

  render(){
  return (
    <div className="App">
    <div className={this.state.searchBarClass}>
    <h3 onClick={this.randomArticle}>Click here for a random article</h3>
    {(this.state.hasClickedButton ===true) ? <Searchbar
                                              toggle={this.toggleState}
                                              clickedSearch={this.toggleClickedSearch}
                                              clickedSearch1={this.toggleClickedSearch1}
                                              toggleSearchBarClass={this.toggleSearchBarClass}
                                              /> : <img className="glass" src={glass} onClick={this.toggleState}></img>}
    </div>
    {console.log(this.state)}
    {this.renderH3()}

    </div>
  );
}
}

export default App;
