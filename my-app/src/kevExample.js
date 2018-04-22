import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  createList() {
    const myList = ['one', 'two', 'three', 'four'];
    return myList.map((item) => (<li>{item}</li>));
  }
  createNewList() {
    const myObj = {
      name: 'kev',
      colour: 'blue',
    };
    const myList = [myObj, myObj, myObj, myObj, myObj];
    return myList.map((item) => (<li><strong>{item.name}</strong>: {item.colour}</li>));
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React, Hello</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ol>
          {this.createList()}
        </ol>
        <ul>
          {this.createNewList()}
        </ul>


        <p>SONAL CODE</p>
        <h3>Some of the fab GOT characters are: </h3>
        <ul className="GameOfThrones">
          <li className="character" id="jon" data-type="hero">Jon Snow</li>
          <li className="character daenerys" data-type="badass">Daenerys</li>
          <li className="character selfish" data-type="villain">Cerci</li>
          <li> who else is bad?
            <li className="character bad" data-type="killer"><em>Whitewalkers (nested)</em></li>
          </li>
        </ul>

        <p>So let me use my js code example to find information on the page and return it????! (using the class-name) </p>
        <p>Who is my ultimate fav character?  Her dragons are awesome. (using the id)</p>
        <p>One of the leading male hero figures is  who is very easy one the eye. (using the data-type)</p>
        <p> is portrayed as a selfish villan </p>
        <p>oooooh... now the mystical have broken through the wall. HURRY UP NEXT SEASON PLEASE. (using the nested element)</p>




      </div>
    );
  }
}

export default App;
