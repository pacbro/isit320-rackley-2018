import React, { Component } from 'react';
import './App.css';
import 'whatwg-fetch';

class createAssociate extends Component {
    constructor() {
        super();
        this.state = {
            result: 'waiting',
            route: 'waiting',
            architecture: 'waiting',
            instanceId: 'waiting',
            keyName: 'waiting'
        };
    }

    createEducate = () => {
        fetch('/create-educate').then(function(response) {
            return response.json();
        });
    };

    createStandard = () => {
        fetch('/create-standard').then(function(response) {
            return response.json();
        });
    };

    associateElasticIp = () => {
        const that = this;
        fetch('/associate-elastic-ip')
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                console.log('parsed json', json);
                that.setState({ result: json['result'] });
                that.setState({ route: json['route'] });
                that.setState({ architecture: json['architecture'] });
                that.setState({ instanceId: json['instanceId'] });
                that.setState({ keyName: json['keyName'] });
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
                <div className="App-intro">
                    <button onClick={this.createEducate}>
                        Create with AWS Educate Account
                    </button>
                    <button onClick={this.createWithAwsStandardAccount}>
                        Create with AWS Standard Account
                    </button>
                    <button onClick={this.associateElasticIp}>
                        Associate Elastic Ip
                    </button>
                </div>

                <p className="App-state">
                    Result: {this.state.result}
                    Route: {this.state.route}
                    Architecture: {this.state.architecture}
                    InstanceId: {this.state.instanceId}
                    KeyName: {this.state.keyName}
                </p>
            </div>
        );
    }
}

export default createAssociate;
