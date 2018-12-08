import React, { Component } from 'react';
import './App.css';
import 'whatwg-fetch';

class createAssociate extends Component {
    removeKnownHost = () => {
        fetch('/remove-known-host').then(function(response) {
            return response.json();
        });
    };

    rebootInstance = () => {
        fetch('/reboot-instance').then(function(response) {
            return response.json();
        });
    };

    getInstanceStatus = () => {
        fetch('/get-instance-status').then(function(response) {
            return response.json();
        });
    };

    render() {
        return (
            <div className="App">
                <button onClick={this.removeKnownHost}>
                    Remove from KnownHost
                </button>
                <button onClick={this.getInstanceStatus}>
                    Get Instance Status
                </button>
                <button onClick={this.rebootInstance}>Reboot Instance</button>
            </div>
        );
    }
}

export default createAssociate;
