import logo from './logo.svg';
import './App.css';
import parse from './parser/Parser.js';
import React from 'react';
import Parser from './parser/Parser.js';
import RulebookView from './components/RulebookUI.js';
import PasteView from './components/Paster.js';


class App extends React.Component {

  constructor(props) {
    super(props)

    this.parser = new Parser()

    this.handleRawData = this.handleRawData.bind(this)
    this.state = {
      view: 'paster',
      rulebook: null
    }
  }

  handleRawData(rawData) {

    this.setState({
      rulebook: this.parser.parse(rawData),
      view: 'rulebook'
    });

  }

  render() {

    let view
    if(this.state.view === 'rulebook') view = <RulebookView rulebook={this.state.rulebook}/>
    else view = <PasteView handleRawData={this.handleRawData}/>

    return (
      <div className="App">
        {view}
      </div>
    )}
}

export default App;
