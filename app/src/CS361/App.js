import React, { Component } from 'react';
import Greedy from './Greedy Algorithm';
import Horner from './Horner\'s Rule';
import Taylor from './Taylor Series Algorithm';
import Bisection from './Bisection Algorithm';
import NewtonRaphson from './Newton-Raphson Algorithm';
import Secant from './Secant Algorithm';
import AvramSidis from './Avram-Sidis Algorithm';
import LUDecomposition from './LU Decomposition';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      index: -1
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(num){
    this.setState({index: num});
  }

  handlePage(){
    switch(this.state.index){
      case 0:
        return <Greedy goBack={this.handleClick}/>
      case 1:
        return <Horner goBack={this.handleClick}/>
      case 2: 
        return <Taylor goBack={this.handleClick}/>
      case 3:
        return <Bisection goBack={this.handleClick}/>
      case 4:
        return <NewtonRaphson goBack={this.handleClick}/>
      case 5: 
        return <Secant goBack={this.handleClick}/>
      case 6:
        return <AvramSidis goBack={this.handleClick}/>
      case 7:
        return <LUDecomposition goBack={this.handleClick}/>
      default:
        return(
          <div>
          <div className="text-center"><h1>Sateesh CS 361</h1></div>
          <div className="text-center" onClick={e => this.handleClick(0)}>Greedy Algorithm</div>
          <div className="text-center" onClick={e => this.handleClick(1)}>Horner's Rule Algorithm</div>
          <div className="text-center" onClick={e => this.handleClick(2)}>Taylor Series Algorithm</div>        
          <div className="text-center" onClick={e => this.handleClick(3)}>Bisection Algorithm</div>      
          <div className="text-center" onClick={e => this.handleClick(4)}>Newton-Raphson Algorithm</div>
          <div className="text-center" onClick={e => this.handleClick(5)}>Secant Method Algorithm</div>
          <div className="text-center" onClick={e => this.handleClick(6)}>Avram Sidis Method Algorithm</div>
          <div className="text-center" onClick={e => this.handleClick(7)}>LU Decomposition Method Algorithm</div>
          <div className="text-center">Back Substitution Algorithm</div>
          <div className="text-center">Scaled Pivots Algorithm</div>
        </div>
        );
    }
  }

  render() {
    return this.handlePage();
  }
}
 
export default App;