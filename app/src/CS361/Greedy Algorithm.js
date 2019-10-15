import React, { Component } from 'react';
class Greedy extends Component {
    constructor(props){
        super(props);
        this.state = {
            numbers: [],
        };
    }
    
    greedy(event){
        console.log(event.target.value);
        let num = event.target.value;
        let arr = [];
        let pow = 0;
        while(num > 0){
            arr.push([num%2,pow]);
            num = Math.floor(num/2);
            pow++;
        }
        arr.reverse();
        console.log(arr);
        const result = arr.filter(val => val[0]!==0);
        this.setState({numbers: result});
    }

    render() { 
        return (
            <div>
                <h1 className="text-center">Greedy Algorithm</h1>
                <button onClick={() => this.props.goBack(-1)}>Back</button>
                Enter a number:<input type="number" onChange={e => this.greedy(e)}></input>
                {this.state.numbers.map((val,id) =>{
                    return <div key={id}>Exp: 2^{val[1]}   Val: {Math.pow(2,val[1])}</div>
                })}
            </div>
        );
    }
}
 
export default Greedy;