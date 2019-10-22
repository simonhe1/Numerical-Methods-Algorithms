import React, { Component } from 'react';
import { lusolve,lup } from 'mathjs';

class LUDecomposition extends Component {
    constructor(props){
        super(props);
        this.state = {
            // matrix: [[2,1,3],[4,-1,3],[-2,5,5]],
            matrix: [[1,1,-1],[1,-2,3],[2,3,1]],
        };
    }

    renderMatrix(size){
        console.log('');
        console.log('');
        console.log('');
        console.log(lup(this.state.matrix));
        // console.log(lusolve(this.state.matrix,[0,-3]));
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
    
    render() { 
        return (
            <div>
                <h1 className="text-center">LU Decomposition Method Algorithm</h1>
                <button onClick={() => this.props.goBack(-1)}>Back</button>
                Enter Size of matrix:
                <input 
                    type="number"
                    placeholder="Default size is 0"
                    onChange={e => this.renderMatrix(parseInt(e.target.value))}
                />
                <div>
                    <table>

                    </table>
                </div>
            </div>
        );
    }
}
 
export default LUDecomposition;