import React, { Component } from 'react';
class Horner extends Component {
    constructor(props){
        super(props);
        this.state = {
            coefficients: [],
            power: -1,
            x: -1,
        };
    }

    computeHorner(coeffs, x){
        return (
            <div>
                {
                    coeffs.reduceRight((acc,coeff) =>{
                        return acc*x + parseInt(coeff,10);
                    },0)
                }
            </div>
        );
    }

    populateCoefficient(event,index){
        let copy = this.state.coefficients;
        copy[index] = event.target.value;
        const result = copy.filter(val => val!=='');
        this.setState({coefficients: result});
    }

    populateInputs(magnitude){
        let inputs = [];
        for(let i=0;i<magnitude;i++){
            inputs.push(
                <div key={i}>
                    <input 
                        type="number"
                        placeholder="Coefficient"
                        onChange={e => this.populateCoefficient(e,i)}
                    />
                    <span>X^{i}</span>
                </div>
            );
        }
        return inputs;
    }

    populatePowers(event){
        let magnitude = event.target.value;
        this.setState({power: magnitude});
    }

    changeX(event){
        let val = event.target.value;
        this.setState({x: val});
    }

    render() { 
        return (
            <div>
                <h1 className="text-center">Horner's Rule Algorithm</h1>
                <div className="row">
                    <div className="col-sm-2">
                        <button onClick={() => this.props.goBack(-1)}>Back</button>
                    </div>
                    <div className="col">
                        <div>
                            X = <input type="number" onChange={e => this.changeX(e)} placeholder="Value for X"/>
                        </div>
                        <div>
                        Highest Power:
                        <input type="number" onChange={e => this.populatePowers(e)}></input>
                        </div>
                    </div>
                </div>
                <div>{this.populateInputs(this.state.power)}</div>
                {
                    this.state.coefficients.length === parseInt(this.state.power,10) ?
                    this.computeHorner(this.state.coefficients, parseInt(this.state.x,10)) : <div></div>
                }
            </div>
        );
    }
}
 
export default Horner;