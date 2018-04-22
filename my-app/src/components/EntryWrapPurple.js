import React, { Component } from 'react';
import './../App.css';

class EntryWrapPurple extends Component {
  render() {
    return(
      <div className="wrap-purple">
        <h2 className="app-copy-purple">{this.props.title}</h2>
        {this.props.children}
      </div>
    );
  }
};

export default EntryWrapPurple;
