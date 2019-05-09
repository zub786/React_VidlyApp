import React, { Component } from 'react';
import {Movie} from './components/movies';
import './App.css';
import {Counters} from './components/counters';
import NavBar from './components/navbar'

class App extends Component {
  // Lifting State from Counters component to Parent App Component


  state = { 
    counters: [
        {id: 1, value: 5},
        {id: 2, value: 0},
        {id: 3, value: 0},
        {id: 4, value: 0}
    ]
 }
 constructor(){
   super();
   console.log('App - Constructor Called');
 }
 componentDidMount(){
   console.log('App - Component has Mounted in DOM');
 }
 handleReset = () =>{

    const counters = this.state.counters.map(c => 
        {
            c.value = 0;
            return c;
        }
    );
    this.setState({counters});
};
 handleDelete = (counterId) =>{
     const counters = this.state.counters.filter(c => c.id !== counterId);
     this.setState({counters: counters});
 };
 handleIncrement = (counter) =>{
   const updatedCounters = this.state.counters;
   const index = updatedCounters.indexOf(counter);
   updatedCounters[index].value++;
   this.setState({updatedCounters});
};
handleDecrement = (counter) =>{
    const updatedCounters = this.state.counters;
    const index = updatedCounters.indexOf(counter);
    updatedCounters[index].value--;
    this.setState({updatedCounters});
};
 handleAddNew = () =>{
     const counters = this.state.counters;
     
    counters.length > 0? this.state.counters.push({id: counters[counters.length - 1].id + 1, value: 0}): this.state.counters.push({id: 1, value: 0});
     const updatedCounters = this.state.counters;
    this.setState({counters: updatedCounters});
};



  render() {
    console.log('App - Component is rendering ...');
    return (
     <React.Fragment>
       <NavBar CountersLength={this.state.counters.filter(i => i.value > 0).length}/>
     <main>
       {/* <Counters className="container" OnDelete={this.handleDelete} OnIncrement={this.handleIncrement} OnDecrement={this.handleDecrement} OnAdd={this.handleAddNew} OnReset={this.handleReset} counters={this.state.counters}/> */}
       <Movie  />
       </main>
       </React.Fragment>
    );
  }
}

export default App;
