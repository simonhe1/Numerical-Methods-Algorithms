import React, { Component } from 'react';
class TaylorSeries extends Component {
    constructor(props){
        super(props);
        this.state = {
            expression: '',
            terms: 0,
        };
    }

    factorial(num, accumulator = 1){
        return (num > 1) ? 
                this.factorial(num - 1, num * accumulator) :
                accumulator;
    }

    updateExpression(exp){this.setState({expression: exp});}
    updateTerms(term){this.setState({terms: term});}

    approximate(expression, k){
        if(expression.split('').some(element=> element===')')){
            let partition = expression.toString().split('(');
            let num = partition[1].toString().split(')');
            num = parseInt(num[0],10);
            switch(partition[0].toLowerCase()){
                case 'sin':
                case 'sine':
                    let sin_approx = 0;
                    num = (num * Math.PI) / 180;
                    for(let i=0;i<k;i++){
                        let coefficient = (-1)**i;
                        let numerator = num**(2*i + 1);
                        let denom = this.factorial(2*i + 1);
                        sin_approx += (coefficient) * ( (numerator) / (denom));
                    }
                    return <div>{sin_approx}</div>
                case 'cos':
                case 'cosine':
                    let cos_approx = 0;
                    num = (num * Math.PI) / 180;
                    for(let i=0;i<k;i++){
                        let coefficient = (-1)**i;
                        let numerator = num**(2*i);
                        let denom = this.factorial(2*i);
                        cos_approx += (coefficient) * ( (numerator) / (denom));
                    }
                    return <div>{cos_approx}</div>
                default:
                    return <div>Haven't implemented this yet!</div>
            }
        }else if(expression.toLowerCase().split('').some(element=> element==='^')){
            let partition = expression.toString().split('^');
            let num = parseInt(partition[1],10);
            let e_approx = 0;
            for(let i=0;i<k;i++){
                let numerator = num**(i);
                let denom = this.factorial(i);
                e_approx += (numerator) / (denom); 
            }
            return <div>{e_approx}</div>
        }else return <div>Yerrr</div>
    }

    render() { 
        return (  
            <div>
                <h1 className="text-center">Taylor Series Algorithm</h1>
                <button onClick={() => this.props.goBack(-1)}>Back</button>
                <div>
                    Approximate: 
                    <input 
                        type="text" 
                        onChange={e => this.updateExpression(e.target.value)}
                        placeholder="Only supports sin(x),cos(x),and e^x"
                        style={{width:'100%'}}
                    />
                </div>
                <div>
                    How many terms to approximate by? 
                    <input 
                        type="number"
                        onChange={e => this.updateTerms(e.target.value)}
                    />
                </div>
                {this.approximate(this.state.expression,parseInt(this.state.terms,10))}
            </div>
        );
    }
}
 
export default TaylorSeries;