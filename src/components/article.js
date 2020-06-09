import React from 'react'

class Article extends React.Component {

  constructor(){
    super()

  }



  render(){
    return (
      <div>
      {this.props.info.title}

      </div>
    )
  }
}

export default Article
