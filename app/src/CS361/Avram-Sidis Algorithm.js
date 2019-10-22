import React, { Component } from 'react';
class AvramSidis extends Component {
    constructor(props){
        super(props);
        this.state = {
            x:[],
            y:[],
        };
    }

    // populateX(x_1){
        
    // }

    render() { 
        return (
            <div>
                <h1 className="text-center">Avram-Sidis Method Algorithm</h1>
                <button onClick={() => this.props.goBack(-1)}>Back</button>
                <div>
                    x<sub>1</sub>:
                    <input 
                        type="number"
                        placeholder={`Value for X${String.fromCharCode(0x00002081)}`}
                        onChange={e => this.populateX(parseFloat(e.target.value))}
                    />
                </div>
                <div>
                    k:
                    <input 
                        type="number"
                        placeholder={`Value for K`}
                        onChange={e => this.updateEnd(parseFloat(e.target.value))}
                    />
                </div>
                <div>
                    {String.fromCharCode(0x000003B5)}
                    <input 
                        type="number"
                        placeholder="Error threshold"
                        onChange={e => this.updatePrecision(parseFloat(e.target.value))}
                    />
                </div>
                <div>
                    Expression:
                    <div>
                        <input 
                                type="text"
                                placeholder="Expression"
                                onChange={e => this.updateExpression(e.target.value)}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
 
export default AvramSidis;