import React from 'react'

class Article extends React.Component {

  constructor(){
    super()

  }

  openArticle(key){
    window.open(`https://en.wikipedia.org/?curid=${key}`)
  }

  render(){
    return (
      <div className="article" onClick={()=> this.openArticle(this.props.info.pageid)}>
      <h3 className="title">{this.props.info.title}</h3>
      {this.props.info.extract}
      {console.log(this.props.info)}
      </div>
    )
  }
}

export default Article
