import React, { Component } from 'react';
class LUDecomposition extends Component {
    constructor(props){
        super(props);
        this.state = {
            matrix: [[0,1],[1,2],[2,3]],
        };
    }

    renderMatrix(size){
        console.log('');
        console.log('');
        console.log('');
        const { matrix } = this.state;
        if(!isNaN(size)){
            let newMatrix = [];
            console.log('matrix length before', matrix.length);
            if(size > matrix.length) {
                for(let i=0;i<size;i++){
                    if(matrix[i].length < size){
                        for(let j=0;j<size;j++){
                            // newMatrix[i][j] = matrix[i][j] === undefined 
                        }
                    }
                    newMatrix[i] = new Array(size);
                }
                console.log('matrix length after',newMatrix.length);
            }
            else newMatrix = newMatrix.splice(0,size);
            console.log(newMatrix);
            this.setState({matrix: newMatrix});
            console.log(this.state.matrix);
            console.log('length:',this.state.matrix.length);
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