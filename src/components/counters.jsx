import React, { Component } from 'react';
import { Counter } from './counterComponent.jsx';

export class Counters extends Component {

    constructor(){
        super();
        console.log('Counters - Constructor Called');
    }




    render() { 
        console.log("Counters is rendering");
        // This is object distructuring, 
        // we don't need to use this.props variable to reach specific variable
        const { OnAdd, OnDelete, onDeleteProp, counters, OnIncrement,
             OnDecrement, OnReset} = this.props;
        return (  
            <React.Fragment>
            <div>
            <button onClick={OnAdd} className="btn btn-primary btn-sm m-2"> Add New Counter </button> | <button onClick={OnReset} className="btn btn-primary">Reset</button><br/>

            {counters.map(c => <Counter key={c.id} onDeleteProp={OnDelete} OnIncrement={OnIncrement} OnDecrement={OnDecrement} counter={c}>
            </Counter>
            )}
            </div>
            </React.Fragment>);
    }
}
