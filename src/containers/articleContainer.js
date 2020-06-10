import React from 'react'
import Article from '../components/article.js'

class ArticleContainer extends React.Component {

  constructor(){
    super()

  }

  render(){
    return (
      <div className="articleContainer">
      {
        Object.keys(this.props.apiData).map(key => {
          return(
            <Article info={this.props.apiData[key]} key={key}/>
          )
        })
      }
      </div>
    )
  }
}

export default ArticleContainer
