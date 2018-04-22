import React, { Component } from 'react';
import './../App.css';

class DailyEntryWrap extends Component {
  render() {
    return(
      <div className="App-learning2">
        <h2 className="App-copy">{this.props.title}</h2>
        {this.props.children}
      </div>
    );
  }
};

export default DailyEntryWrap;
