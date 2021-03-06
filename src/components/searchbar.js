import React from 'react'
import ArticleContainer from '../containers/articleContainer.js'

class Searchbar extends React.Component {

  constructor(){
    super()
    this.state = {
      text: "",
      apiData: "",
      didExecuteSearch: false
    }
    this.random = this.random.bind(this)
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
    this.props.clickedSearch()
    this.props.toggleSearchBarClass()
    //API not calling for some reason >> turns out I forgot to put in e.preventDefault
    fetch(`https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=${this.state.text}&exintro=&origin=*&prop=extracts%7Cpageimages&format=json`)
   .then(response => response.json())
   .then(data => {
      this.changeState(data.query.pages)
      //for some reason I couldn't setstate using the data, it turns out that its probably related
      //to the e.preventDefault, I found that by passing the data to a different function that im
      //now able to setstate with the data
  }).catch(function(){
        console.log("error");
    });
  }

  changeState(api){
    this.setState({
      apiData: api,
      didExecuteSearch: true
    })
  }

  renderArticleContainer(){
    if(this.state.didExecuteSearch === true){
      return (
        <ArticleContainer apiData={this.state.apiData}/>
      )
    }
  }

  random(){
    this.props.toggle()
    this.props.clickedSearch1()
    // this.props.clickedSearch()
  }

  render(){
    return (
      <div>
      <form onSubmit={this.executeSearch}>
      <input type='text' name='text' value={this.state.text} onChange={this.captureText}/>
      <button type="button" onClick={this.random}>cancel</button>
      </form>
      {this.renderArticleContainer()}
      </div>
    )
  }
}

export default Searchbar

//adding type="button" is very important otherwise the app break and gives message about
//failed form submission
