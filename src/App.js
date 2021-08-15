import './App.css';
import React from 'react';
import Parser from './parser/Parser.js';
import RulebookView from './components/RulebookUI.js';
import PasteView from './components/Paster.js';
import Loading from './components/Loading.js';


class App extends React.Component {

  constructor(props) {
    super(props)

    this.parser = new Parser()

    //this.handleRawData = this.handleRawData.bind(this)
    this.state = {
      view: 'paster',
      rulebook: null,
      errorParsing: false
    }
  }

  componentDidMount() {
    this.fetchRawData()
  }

  fetchRawData() {
    const corsProxy = 'https://api.allorigins.win/get?url='
    const rulesUrl = 'https://media.wizards.com/2021/downloads/MagicCompRules%2020210419.txt'

    fetch(corsProxy + rulesUrl)
    .then(response => response.json())
    .then(data => this.handleRawData(data.contents))
  }

  handleRawData(rawData) {

    const rulebook = this.parser.parse(rawData);
    if(!rulebook.isEmpty()) {
      this.setState({
        rulebook: this.parser.parse(rawData),
        view: 'rulebook'
      });
    }
    else alert("There was a problem parsing the fetched data")

  }

  render() {

    let view
    if(this.state.view === 'rulebook') view = <RulebookView rulebook={this.state.rulebook}/>
    else view = <Loading message='Fetching data'/>
    //else view = <PasteView handleRawData={this.handleRawData}/>

    return (
      <div className="App">
        {view}
      </div>
    )}
}

export default App;
