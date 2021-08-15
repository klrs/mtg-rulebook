import './App.css';
import React from 'react';
import Parser from './parser/Parser.js';
import RulebookUI from './components/RulebookUI.js';
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
    .then(response => {
      if(!response.ok) alert('There was a problem with fetching the data')
      return response.json()
    })
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
    if(this.state.view === 'rulebook') view = <RulebookUI rulebook={this.state.rulebook}/>
    else view = <Loading message='Fetching data'/>

    return (
      <div className="App">
        {view}
      </div>
    )}
}

export default App;
