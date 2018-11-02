import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  copyScript = () => {
    fetch('/script-pusher/copy-script')
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            console.log('parsed json', json);
           })
        .catch(function(ex) {
            console.log('parsing failed', ex);
        });
};


  render() {
    return (
      <div className="App">
      <header>
          <h1>Copy File</h1>
      </header>
      <main>
       <button id='copy-script' onClick={this.copyScript}>Copy Script</button>
      </main>
  </div>
  );
  }
}

export default App;
