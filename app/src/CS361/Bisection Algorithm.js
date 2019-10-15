import React, { Component } from 'react';
class Bisection extends Component {
    constructor(props){
        super(props);
        this.state = {
            numerator: '1',
            denominator: '1',
            start: 0.0,
            end: 0.0,
            target: 0.0,
            threshold: 0.0,
        };
    }

    updateNumerator(num){
        let defaultValue = num.length !== 0 ? num : '1';
        this.setState({numerator: defaultValue});
    }

    updateDenominator(denom){
        let defaultValue = denom.length !== 0 ? denom : '1';
        this.setState({denominator: defaultValue});
    }

    updateStart(a){this.setState({start: a})};
    updateEnd(b){this.setState({end: b})};
    updateThreshold(epsilon){this.setState({threshold: epsilon});}
    updateTarget(tar){this.setState({target: tar});}

    plugInValue(expression,value){
        let sum = 0;
        expression.forEach(currExpression =>{
            let indexOfX = currExpression.indexOf('x');
            let indexOfExponent = currExpression.indexOf('^');
            let coefficient = 0;
            if(indexOfX === 0) coefficient = 1;
            else if(indexOfX !== -1){
                if(indexOfX === 1){
                    if(Number.isNaN(+(currExpression.charAt(0)))){
                        coefficient = parseInt(currExpression.charAt(0)+1);
                    }else{
                        coefficient = parseInt(currExpression.charAt(0));
                    }
                }else{
                    coefficient = parseInt(currExpression.substring(0,indexOfX));
                }
            }else{
                coefficient = parseInt(currExpression.substring(0));
            }
            let exponent = 
                indexOfExponent !== -1 ? 
                parseInt(currExpression.substring(indexOfExponent+1)):
                0;
            sum+= coefficient*(value**exponent);
        });
        return sum;
    }

    calculateBisection(num,denom,a,b,target,threshold){
        let tableOfValues = [];
        let regex = /([+-]?[^-+]+)/;
        num = num.split(regex).filter(expression => expression.length > 0);
        denom = denom.split(regex).filter(expression => expression.length > 0);
        let c = 0.5*(a+b);
        let f_c = this.plugInValue(num,c)/this.plugInValue(denom,c);
        let iteration = 0;
        while(f_c !== target && iteration < 10){
            tableOfValues.push(
                <tr key={iteration}>
                    <td>{a}</td>
                    <td>{b}</td>
                    <td>{c}</td>
                    <td>{f_c}</td>
                </tr>
            );
            if(Math.abs(f_c - target) <= threshold) break;
            let f_b = this.plugInValue(num,b)/this.plugInValue(denom,b);
            if(Math.sign(f_c - target) !== Math.sign(f_b - target)) a = c;
            else b = c;
            c = 0.5*(a+b);
            f_c = this.plugInValue(num,c)/this.plugInValue(denom,c);
            iteration++;
        }
        return tableOfValues;
    }

    render() { 
        const { numerator, denominator, start, end, target, threshold} = this.state;
        return (
            <div>
                <h1 className="text-center">Bisection Algorithm</h1>
                <button onClick={() => this.props.goBack(-1)}>Back</button>
                <div>
                    a:
                    <input 
                        type="number"
                        placeholder="lower bound"
                        onChange={e => this.updateStart(parseFloat(e.target.value))}
                    />
                </div>
                <div>
                    b:
                    <input 
                        type="number"
                        placeholder="upper bound"    
                        onChange={e => this.updateEnd(parseFloat(e.target.value))}
                    />
                </div>
                <div>
                    target:
                    <input 
                        type="number"
                        placeholder="target for bisection"
                        onChange={e => this.updateTarget(parseFloat(e.target.value))}   
                    />
                </div>
                {String.fromCharCode(0x000003B5)}
                <input 
                    type="number"
                    placeholder="Error threshold"
                    onChange={e => this.updateThreshold(parseFloat(e.target.value))}
                />
                <div>
                    Equation:
                    <div>
                        <input 
                                type="text"
                                placeholder="Numerator"
                                onChange={e => this.updateNumerator(e.target.value)}
                                style={{marginLeft:'30%'}}
                        />
                        <hr style={{width:'60%',marginLeft:'3em'}}/>
                        <input 
                            type="text"
                            placeholder="Denominator"
                            onChange={e => this.updateDenominator(e.target.value)}
                            style={{marginLeft:'30%'}}
                        />
                    </div>
                </div>
                <div className="container-fluid" style={{overflow:'hidden !important'}}>
                    <div className="card">
                        <h3 className="card-header text-center">Bisection Table</h3>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>a</th>
                                    <th>b</th>
                                    <th>c</th>
                                    <th>f(c)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.calculateBisection(numerator,denominator,start,end,target,threshold)}
                            </tbody>
                        </table>
                    </div>
                </div>
                </div>
        );
    }
}
 
export default Bisection;