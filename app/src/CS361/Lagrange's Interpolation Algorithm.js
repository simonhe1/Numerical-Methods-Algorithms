import React, { Component } from 'react';
class Lagrange extends Component {
    constructor(props){
        super(props);
        this.state = {
            points: [],
            size: -1,
        };
    }

    renderPoints(size){this.setState({size});}
    pluginPoints(point, index){
        if(point.indexOf(')') !== -1){
            let x_y = point.slice(/((\d+))/gm);
            console.log(x_y);
            let tempArr = [...this.state.points];
            tempArr[index] = [x_y[0],x_y[1]];
            this.setState({points: tempArr});
        }
        console.log(this.state.points);
    }

    populatePoints(magnitude){
        let points = [];
        for(let i=0;i<magnitude;i++){
            points.push(
                <div key={i}>
                    <input 
                        style={{width: '60%'}}
                        type="text"
                        placeholder={`Point in the form of (X${String.fromCharCode(0x00002081)},X${String.fromCharCode(0x00002082)})`}
                        onChange={e => this.pluginPoints(e.target.value)}
                    />
                </div>
            )
        }
        return points;
    }

    render() { 
        return (
            <div>
                <h1 className="text-center">Lagrange Interpolation Algorithm</h1>
                <button onClick={() => this.props.goBack(-1)}>Back</button>
                <div>
                    How many points?
                    <input 
                        type="number"
                        placeholder="Default size is 0"
                        onChange={e => this.renderPoints(parseInt(e.target.value))}
                    />
                </div>
                <div>
                    {this.populatePoints(this.state.size)}
                </div>
            </div>
        );
    }
}
 
export default Lagrange;