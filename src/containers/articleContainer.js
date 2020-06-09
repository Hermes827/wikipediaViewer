import React from 'react'
import Article from '../components/article.js'

class ArticleContainer extends React.Component {

  constructor(){
    super()

  }

  // renderArticles(){
  // const data = this.props.apiData
  // const articleKey = Object.keys(data)
  // articleKey.map(key => {
  //   return(
  //     <Article info={key}/>
  //   )
  // })
  // }



  render(){
    return (
      <div>

      {
        Object.keys(this.props.apiData).map(key => {
          return(
            <Article info={this.props.apiData[key]}/>
          )
        })
      }
      </div>
    )
  }
}

export default ArticleContainer
