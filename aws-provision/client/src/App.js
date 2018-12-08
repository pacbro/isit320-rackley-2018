import React, { Component } from 'react';
import './App.css';
import 'whatwg-fetch';
import { CreateAssociate } from 'CreateAssociate';
import { ElfHeader } from 'Elfheader';
import { RunLocal } from 'RunLocal';
import { RunRemote } from 'RunRemote';
import { Tools } from 'Tools';

class App extends Component {
    render() {
        return (
            <div className="App">
                <ElfHeader />
                <CreateAssociate />
                <RunLocal />
                <RunRemote />
                <Tools />
            </div>
        );
    }
}

export default App;
