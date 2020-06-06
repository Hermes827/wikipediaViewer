import React from 'react'
import ArticleContainer from '../containers/articleContainer.js'

class Searchbar extends React.Component {

  constructor(){
    super()
    this.state = {
      text: ""
    }
    this.captureText = this.captureText.bind(this)
    this.executeSearch = this.executeSearch.bind(this)
  }

  captureText(event){
    this.setState({
      text: event.target.value
    })
  }

  executeSearch(e){
    e.preventDefault()
    fetch(`https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=${this.state.text}&exintro=&origin=*&prop=extracts%7Cpageimages&format=json`)
   .then(response => response.json())
   .then(data => {
    console.log(data)
     })
  }

  //API not calling for some reason >> turns out I forgot to put in e.preventDefault

  //I just need to add the ability to interpolate the wiki api and this should work
  //perhaps use window.open function with the finished api?

  render(){
    return (
      <div>
      <form onSubmit={this.executeSearch}>
      <input type='text' name='text' value={this.state.text} onChange={this.captureText}/>
      <button onClick={this.toggleState}>cancel</button>
      <ArticleContainer/>
      </form>
      </div>
    )
  }
}

export default Searchbar
