import React, { Component } from 'react';
import { lusolve } from 'mathjs';

class LUDecomposition extends Component {
    constructor(props){
        super(props);
        this.state = {
            matrix: [],
            solution: [],
        };
    }

    updateMatrix(value, row, col){
        let tempMatrix = [...this.state.matrix];
        tempMatrix[row][col] = value;
        this.setState({matrix: tempMatrix});
        console.log(tempMatrix);
    }

    updateSolution(value, index){
        let tempMatrix = [...this.state.solution];
        tempMatrix[index] = value;
        this.setState({solution: tempMatrix});
        console.log(tempMatrix);
        console.log(this.state.solution);
    }

    inputSolutionVals(size){
        this.setState({solution: new Array(size)});
    }

    findSolution(){
        try{
            let output = lusolve(this.state.matrix,this.state.solution);
            return(
                <div>
                    {output.map((val,i) => <div key={i}>X<sub>{i+1}</sub>{val}</div>)}
                </div>
            );
        }catch(err){
            return <tr><td>Error</td></tr>
        }
    }

    inputMatrixVals(size){
        // console.log(lup(this.state.matrix));
        // console.log(lusolve(this.state.matrix,[1,6,4]));
        const { matrix } = this.state;
        if(!isNaN(size)){
            let newMatrix = [];
            if(size > matrix.length) {
                for(let i=0;i<size;i++){
                    let subMatrix = [];
                    if(matrix[i] === undefined)
                        subMatrix = new Array(size);
                    else{
                        for(let j=0;j<size;j++){
                            subMatrix.push(matrix[i][j] === undefined ? 0 : matrix[i][j]);                        
                        }
                    }
                    newMatrix.push(subMatrix);
                }
            }
            else newMatrix = newMatrix.splice(0,size);
            this.setState({matrix: newMatrix});
            console.log(newMatrix);
            // console.log(lusolve(newMatrix,[4,-6,7]));
        }
    }

    renderSolution(){
        let solution = [];
        for(let i=0;i<this.state.solution.length;i++){
            solution.push(
                <div>
                    <input
                        type="number"
                        onChange={e => this.updateSolution(parseInt(e.target.value),i)}
                    />
                </div>
            );
        }
        return (
            <tr>
                {solution.map((item,i) => <td key={i}>{item}</td>)}
            </tr>
        );
    }

    renderMatrix(size){
        let inputs = [];
        try{
            for(let i=0;i<size;i++){
                let innerInputs = [];
                for(let j=0;j<size;j++){
                    innerInputs.push(
                        <td key={i*j + j}>
                            <input
                                type="number"
                                onChange={e => this.updateMatrix(parseInt(e.target.value),i,j)}
                            />
                        </td>
                    );
                }
                inputs.push(<tr key={i}>{innerInputs}</tr>);
            }
        }catch(err){
            inputs.push(<div>Matrix hasn't been filled out yet...</div>)
        }
        return inputs;
    }
    
    render() { 
        return (
            <div>
                <h1 className="text-center">LU Decomposition Method Algorithm</h1>
                <button onClick={() => this.props.goBack(-1)}>Back</button>
                <div>
                    Enter Size of matrix:
                    <input 
                        type="number"
                        placeholder="Default size is 0"
                        onChange={e => this.inputMatrixVals(parseInt(e.target.value))}
                    />
                </div>
                <div>
                    Enter size of solution matrix:
                    <input 
                        type="number"
                        placeholder="Default size is 0"
                        onChange={e => this.inputSolutionVals(parseInt(e.target.value))}
                    />
                    <table>
                        <tbody>
                            {this.renderSolution()}
                        </tbody>
                    </table>
                </div>
                <div>
                A Matrix
                    <table>
                        <tbody>
                            {this.renderMatrix(this.state.matrix.length)}
                        </tbody>
                    </table>
                </div>
                <div>
                Solution
                    {this.findSolution()}
                </div>
            </div>
        );
    }
}
 
export default LUDecomposition;