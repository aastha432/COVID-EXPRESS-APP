import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>

class App extends Component {
  constructor() {
    super();
    this.state = { message: '' };
  }

  componentDidMount() {
    fetch('/api/message')
      .then(response => response.json())
      .then(json => this.setState({ message: json }));
  }

  render() {
    return (
      <div className= "container" >
        <h1 className="App">
          Welcome to the Landing page!
        </h1>
     </div>

    );
  }
}

export default App;
