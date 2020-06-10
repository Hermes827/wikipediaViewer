import React from 'react'

class Article extends React.Component {

  constructor(){
    super()

  }

  openArticle(key){
    window.open(`https://en.wikipedia.org/?curid=${key}`)
  }

  render(){
    let data = this.props.info.extract.slice(0, 200)
    data = data.replace(/<\/?[^>]+(>|$)/g, '');
    return (
      <div className="article" onClick={()=> this.openArticle(this.props.info.pageid)}>
      <h3 className="title">{this.props.info.title}</h3>
      <div className="articleContent">{data}</div>
      </div>
    )
  }
}

export default Article
