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
      selectedChapter: this.props.rulebook.chapters.get(100),
      searchString: ''
    }
  }

  onChapterClicked(key, e) {
    this.setState({
      selectedChapter: this.props.rulebook.chapters.get(key)
    })
  }

  onSearchChange(search) {
    this.setState({searchString: search})
  }

  render() {
    return (
      <div id="Rulebook">
        <SearchBar onSearchChange={this.onSearchChange}/>
        <TableOfContents rulebook={this.props.rulebook} onChapterClicked={this.onChapterClicked} search={this.state.searchString}/>
        <SelectedChapter chapter={this.state.selectedChapter} search={this.state.searchString}/>
      </div>
    )
  }
}

export default RulebookView