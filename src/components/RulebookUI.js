import React from 'react';
import TableOfContents from './TableOfContents.js'
import SelectedChapter from './SelectedChapter.js'
import SearchBar from './SearchBar.js'

class RulebookView extends React.Component {

  constructor(props) {
    super(props)

    this.onChapterClicked = this.onChapterClicked.bind(this)
    this.onSearchChange = this.onSearchChange.bind(this)
    this.state = {
      selectedChapterKey: 100,
      searchString: '',
      searchedTuples: []
    }
  }

  onChapterClicked(key, e) { 
    this.setState({
      selectedChapterKey: key
    })
  }

  onSearchChange(search) {
    let searchedTuples

    if(!search) searchedTuples = []
    else if(this.state.searchString && search.includes(this.state.searchString)) {
      searchedTuples = this.props.rulebook.includesSpecific(search, this.state.searchedTuples)
    }
    else {
      searchedTuples = this.props.rulebook.includes(search)
    }

    this.setState({searchString: search, searchedTuples: searchedTuples})
  }

  render() {
    return (
      <div className='Main'>
        <div className='Header'>
          <h1>MtG Rulebook</h1>
          <SearchBar onSearchChange={this.onSearchChange}/>
        </div>
        <div className='Rulebook'>
          <TableOfContents rulebook={this.props.rulebook} onChapterClicked={this.onChapterClicked} searchedTuples={this.state.searchedTuples}/>
          <SelectedChapter rulebook={this.props.rulebook} chapterKey={this.state.selectedChapterKey} searchedTuples={this.state.searchedTuples}/>
        </div>
      </div>
    )
  }
}

export default RulebookView