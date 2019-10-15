import React, { Component } from 'react';
class AvramSidis extends Component {
    constructor(props){
        super(props);
        this.state = {

        };
    }
    render() { 
        return (
            <div>
                <h1 className="text-center">Avram-Sidis Method Algorithm</h1>
                <button onClick={() => this.props.goBack(-1)}>Back</button>
            </div>
        );
    }
}
 
export default AvramSidis;