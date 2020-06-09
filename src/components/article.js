import React from 'react'

class Article extends React.Component {

  constructor(){
    super()

  }



  render(){
    return (
      <div className="article">
      {this.props.info.title}

      </div>
    )
  }
}

export default Article
