import React, { Component } from 'react';
import './App.css';

class App extends Component {

callCpuInfo = () => {
    fetch('/call-cpu-info')
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            console.log('JSON from server:', json);

        })
        .catch(function (ex) {
            console.log('parsing failed, error on server, URL bad, network down, or similar');
            console.log(JSON.stringify(ex, null, 4));
        });
};

render() {
    return (
        <div className="App">
            <header>
                <h1>Run SSH</h1>
                <p className="byline">by Jordan Rackley</p>
            </header>
            <main>
                <button onClick={this.callCpuInfo}></button>
            </main>
            <footer>
                <p>&copy; 2018 </p>
            </footer>
        </div>
    );
}
}

export default App;
