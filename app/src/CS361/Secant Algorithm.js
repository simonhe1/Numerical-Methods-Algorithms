import React, { Component } from 'react';
import { simplify } from 'mathjs';
class Secant extends Component {
    constructor(props){
        super(props);
        this.state = {
            x0: 0.0,
            x1: 0.0,
            precision: 0.0,
            expression: '1',
        };
    }

    updateStart(a){this.setState({x0: a})};
    updateEnd(b){this.setState({x1: b})};
    updatePrecision(epsilon){this.setState({precision: epsilon});}

    updateExpression(exp){
        let defaultValue = exp.length !== 0 ? exp : '1';
        this.setState({expression: defaultValue});
    }

    calculateSecant(expression,x0,x1,threshold){
        console.log(threshold);
        let iteration = 0;
        let x_next = 0;
        console.log('');
        console.log('');
        while(iteration < 10 || x_next === x1){
            console.log('iteration', iteration);
            try{
                console.log('expression',expression);
                let f_x0 = simplify(expression).evaluate({x: x0});
                let f_x1 = simplify(expression).evaluate({x: x1});
                x_next = x1 - (((x1-x0)/(f_x1 - f_x0))*f_x1);
                console.log('precision:',Math.abs(x_next-x1),'threshold',threshold);
                if(Math.abs(x_next - x1) <= threshold){
                    
                    break;
                }
                console.log('x_i-1:',x0);
                console.log('x_i:',x1);
                console.log('f(x_0)',f_x0);
                console.log('f(x_1)',f_x1);
                console.log('x_i+1:',x_next);
                x0 = x1;
                x1 = x_next;
            }catch(err){
                x_next = 'Not a valid expression';
                break;
            }
            iteration++;
        }
        return (
            <React.Fragment>
                {x_next}
            </React.Fragment>
        );
    }

    render() { 
        const { x0, x1, expression, precision } = this.state;
        return ( 
            <div>
                <h1 className="text-center">Secant Method Algorithm</h1>
                <button onClick={() => this.props.goBack(-1)}>Back</button>
                <div>
                    x<sub>0</sub>:
                    <input 
                        type="number"
                        placeholder={`Value for X${String.fromCharCode(0x00002080)}`}
                        onChange={e => this.updateStart(parseFloat(e.target.value))}
                    />
                </div>
                <div>
                    x<sub>1</sub>:
                    <input 
                        type="number"
                        placeholder={`Value for X${String.fromCharCode(0x00002081)}`}
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
                <div>
                    {this.calculateSecant(expression,x0,x1,precision)}
                </div>
            </div>
        );
    }
}
 
export default Secant;