import React, { Component } from 'react';
import './App.css';
import 'whatwg-fetch';

class runRemote extends Component {
    runUbuntuSetup = () => {
        fetch('/run-ubuntu-setup').then(function(response) {
            return response.json();
        });
    };

    runGetStarted = () => {
        fetch('/run-get-started').then(function(response) {
            return response.json();
        });
    };

    render() {
        return (
            <div className="App">
                <button onClick={this.runGetStarted}>
                    Run the GetStarted Script on Ec2
                </button>
                <button onClick={this.runUbuntuSetup}>
                    Run RunUbuntuSetup Script on Ec2
                </button>
            </div>
        );
    }
}
export default runRemote;
