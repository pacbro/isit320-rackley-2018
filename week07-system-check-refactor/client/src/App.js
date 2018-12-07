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

    handleChange = event => {
        const selectedValue = event.target.value;
        console.log('HANDLE CHANGE', selectedValue);
        this.setState({
            ...this.state,
            selectedValue: selectedValue
        });
    };

    handleSubmit = event => {
        this.setState({ allData: '' });
        console.log('A name was submitted: ', this.state);
        //if (this.state.selectedValue === 'cpu') {
        this.runCpuInfo(this.state.selectedValue);
        //}
        event.preventDefault();
    };

    render() {
        const radioWeb = (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <div className="elf-form-field">
                        <input
                            type="radio"
                            name="app-choice"
                            value="CpuInfo"
                            id="elf-radio-cpu"
                            onChange={this.handleChange}
                        />
                        <label htmlFor="elf-radio-cpu">CpuInfo</label>

                        <input
                            type="radio"
                            name="app-choice"
                            value="VersionCheck"
                            id="elf-radio-version"
                            onChange={this.handleChange}
                        />
                        <label htmlFor="elf-radio-version">Version Info</label>
                    </div>

                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">
                            Run System Script
                        </button>
                    </div>
                </form>
            </div>
        );

        return (
            <div className="App">
                <main>
                    <section>{radioWeb}</section>
                    <section>
                        <pre>{this.state.allData}</pre>
                    </section>
                    <button onClick={this.runFoo}>Run Foo</button>
                </main>
            </div>
        );
    }
}

export default App;
