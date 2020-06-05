import React from 'react'

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

  executeSearch(){
    // console.log(this.state.text)
    // console.log("hello")
    const weatherApi = `https://api.openweathermap.org/data/2.5/weather?lat=47.4797&lon=-122.2079&units=imperial&appid=2ebf31cbd8d1d525b4f75bedc92f60f0`;
    fetch(weatherApi)
   .then(response => response.json())
   .then(data => {
      console.log(data)
     })
  }

  //API not calling for some reason



  //I just need to add the ability to interpolate the wiki api and this should work
  //perhaps use window.open function with the finished api?

  render(){
    return (
      <div>
      <form onSubmit={this.executeSearch}>
      <input type='text' name='text' value={this.state.text} onChange={this.captureText}/>
      <button onClick={this.toggleState}>cancel</button>
      </form>
      </div>
    )
  }
}

export default Searchbar
