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

    this.hello = this.hello.bind(this)
    this.renderSearchBar = this.renderSearchBar.bind(this)
  }


//   hello = () => {
//     this.setState({
//       hasClickedButton: true
//     })
//     console.log(this.state)
//   }
// //the above arrow function is able to access the "this" context of this class, if it was defined only as a
// //regular function then it wouldn't be able to access the 'this' context of this class because the function
// //has its own 'this' context


  hello(){
    this.setState({
      hasClickedButton: true
    })

  }

  renderSearchBar(){
    if(this.state.hasClickedButton === true){
      return (
        <Searchbar/>
      )
    }
  }


  // render(){
  //  return(
  //   <div>
  //       {(!this.state.isEdit) ? <Display /> : <EditForm />}
  //    </div>
  //      )
  //    }



  randomArticle(){
    window.open("https://en.wikipedia.org/wiki/Special:Random")
  }

  render(){
  return (
    <div className="App">
    <h3 onClick={this.randomArticle}>Click here for a random article</h3>
    {(this.state.hasClickedButton ===true) ? <Searchbar/> :  <img className="glass" src={glass} onClick={this.hello}></img>}
    <h3>Click icon to search</h3>
    </div>
  );
}
}

export default App;
