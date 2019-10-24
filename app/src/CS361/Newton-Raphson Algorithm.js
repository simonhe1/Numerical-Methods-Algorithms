import React, { Component } from 'react';
import { derivative, simplify } from 'mathjs';
class NewtonRaphson extends Component {
    constructor(props){
        super(props);
        this.state = {
            expression: '1',
            precision: 0.0,
            target: 0.0,
        };
        console.log(simplify(derivative('(1+x^2)/(x^3)','x')).evaluate({x: 2}));
    }

    updateExpression(exp){
        let defaultValue = exp.length !== 0 ? exp : '1';
        this.setState({expression: defaultValue});
    }
    
    updatePrecision(epsilon){this.setState({precision: epsilon});}
    updateTarget(tar){this.setState({target: tar});}
    
    calculateNewtonRaphson(exp,x,threshold){
        let iteration = 0;
        let temp_x = x;
        console.log('');
        console.log('');
        console.log('');
        console.log('expression',exp);
        console.log('x',x);
        console.log('threshold',threshold);
        while(iteration < 10){
            console.log('iteration#',iteration);
            try{
                let f_x = simplify(exp).evaluate({x: x});
                let f_prime_x = simplify(derivative(exp,'x')).evaluate({x: x});
                console.log('f(x)',f_x);
                console.log(`f'(x)`,f_prime_x);
                temp_x = x - ((f_x) - x / (f_prime_x));
                if(Math.abs(x - temp_x) <= threshold) {
                    x = temp_x;
                    break;
                }
                x = temp_x;
                console.log('new x',x);
                iteration++;
            }catch(err){ 
                x = 'Not a valid expression.';
                break;
            }
        }
        return(
            <React.Fragment>
                Root:{x}
            </React.Fragment>
        );
    }

    render() { 
        const { expression, precision, target} = this.state;
        return ( 
            <div>
                <h1 className="text-center">Newton-Raphson Algorithm</h1>
                <button onClick={() => this.props.goBack(-1)}>Back</button>
                <div>
                    Target
                    <input
                        type="number"
                        placeholder="Closest root to target"
                        onChange={e => this.updateTarget(parseFloat(e.target.value))}
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
                                placeholder="Try (2x+5)/(x^2-3x^3)..."
                                onChange={e => this.updateExpression(e.target.value)}
                                style={{marginLeft:'30%'}}
                        />
                    </div>
                </div>
                <div>
                    {this.calculateNewtonRaphson(expression,target,precision)}
                </div>
            </div>
        );
    }
}
 
export default NewtonRaphson;