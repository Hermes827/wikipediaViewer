import React from 'react'

class Searchbar extends React.Component {

  constructor(){
    super()

  }

  componentDidMount(){
    // this.startLoadingSpinner()
    // fetch(NEWS_API)
    //   .then(res => res.json())
    //   .then(data => {
    //     this.setState({
    //       news: data.articles
    //     })
    //     this.stopLoadingSpinner()
    //   })
  }

  // setCurrentNewsArticle = (article) => {
  //   this.setState({
  //     currentNewsArticle: article,
  //     lookingAtSingleNewsArticle: true
  //   })
  // }
  //
  // renderDetailedNewsView = () => {
  // const {currentNewsArticle, lookingAtSingleNewsArticle} = this.state
  // if(lookingAtSingleNewsArticle === true) {
  //     return (
  //           <ArticleView
  //           currentNewsArticle={currentNewsArticle}
  //           returnToNewsContainer={this.returnToNewsContainer}
  //           />
  //         )
  //   }
  // }

  returnToNewsContainer = () => {
    this.setState({
      currentNewsArticle: null,
      lookingAtSingleNewsArticle: false
    })
  }

  returnToHomepageFromNewsContainer = () => {
    this.setState({
      currentNewsArticle: null,
      lookingAtSingleNewsArticle: false
    })
    this.props.history.push('/center_console')
  }

  // loading spinner

  // startLoadingSpinner(){
  //   this.setState({
  //     hasClickedButton: true
  //   })
  // }
  //
  // stopLoadingSpinner(){
  //   this.setState({
  //     hasClickedButton: false
  //   })
  // }

  // renderLoadingSpinner(){
  //   if(this.state.hasClickedButton === true){
  //     return (
  //       <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
  //     )
  //   }
  // }

  render(){
    return (
      <div>whats up</div>
    )
  }
}

export default Searchbar
