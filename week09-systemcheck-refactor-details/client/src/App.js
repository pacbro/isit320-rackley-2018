import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { ElfHeader } from 'ElfHeader';
import { RadioWeb } from 'RadioLocal';
import { RadioRemote } from 'RadioRemote';

class App extends Component {
    constructor() {
        super();
        this.state = {
            file: 'File name will be placed here.',
            status: 'waiting for server'
        };
    }

    runFoo = () => {
        const that = this;
        fetch('/api/foo')
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                console.log('parsed json', json);
                that.setState(foo => json);
            })
            .catch(function(ex) {
                console.log(
                    'parsing failed, URL bad, network down, or similar',
                    ex
                );
            });
    };

    render() {
        return (
            <div className="App">
                <ElfHeader />
                <main>
                    <section>
                        <RadioWeb />
                        <RadioRemote />
                    </section>
                    <button onClick={this.runFoo}>Run Foo</button>
                    <p>Foo: {this.state.foo}</p>
                </main>
            </div>
        );
    }
}

export default App;
