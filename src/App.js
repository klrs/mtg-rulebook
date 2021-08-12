import logo from './logo.svg';
import './App.css';
import parse from './Parser.js';
import React from 'react';
import Parser from './Parser.js';
import RulebookView from './RulebookView.js';
import PasteView from './PasteView.js';


class App extends React.Component {

  constructor(props) {
    super(props)

    this.parser = new Parser()

    this.handleRawData = this.handleRawData.bind(this)
    this.state = {
      view: 'pasteView',
      rulebook: null
    }
  }

  handleRawData(rawData) {

    this.setState({
      rulebook: this.parser.parse(rawData),
      view: 'rulebookView'
    });

  }

  render() {
    let view
    switch (this.state.view) {
      case 'pasteView':
        view = (<PasteView handleRawData={this.handleRawData}/>)
        break;
      case 'rulebookView':
        view = (<RulebookView rulebook={this.state.rulebook}/>) 
        break;
      default:
        break;
    }


    return (
      <div className="App">
        {view}
      </div>
    )}
}

export default App;
