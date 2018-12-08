import React, { Component } from 'react';
import './App.css';
import 'whatwg-fetch';

class runLocal extends Component {
    copyGetStarted = () => {
        fetch('/copy-get-started').then(function(response) {
            return response.json();
        });
    };

    render() {
        return (
            <div className="App">
                <button onClick={this.copyGetStarted}>
                    Copy the GetStarted Script
                </button>
            </div>
        );
    }
}

export default runLocal;
