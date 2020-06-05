import React from 'react'

class Searchbar extends React.Component {

  constructor(){
    super()

  }

  render(){
    return (
      <div>
      <form>
      <input/>
      <button onClick={this.toggleState}>cancel</button>
      {console.log(this.props)}
      </form>
      </div>
    )
  }
}

export default Searchbar
