import React, { Component } from "react";

export class Counter extends Component {
// by removing local state we are going to control
// its state from its parent by passing function and data in props

  // state = {
  //   count: counter.value,
  //   tags: ['tag1', 'tag2', 'tag3']
  // };
  // renderTags() {
  //   return this.state.tags.length === 0 ? (
  //     <li>There are no tags!</li>
  //   ) : (
  //     this.state.tags.map(tag => <li key={tag}>{tag}</li>)
  //   );
  // }
  // Arrow functions are the solution, for we dont need to bind every function individually
  // incCounter = () => {
  //     this.setState({count: this.state.count += 1})
  // }
  // decCounter = () => {
  //   this.setState({count: this.state.count -= 1})
  // }
  componentDidUpdate(prevProps, prevState){
    console.log('counter updated');
    console.log('previous prop', prevProps);
    console.log('previous state', prevState);
  }

  render() {
    const {OnIncrement, OnDecrement, onDeleteProp, counter} = this.props;
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}> {this.formatCount()} </span>
        <button onClick={() => {OnIncrement(counter)}} className="btn btn-secondary btn-sm m-2"> + </button>
        <button onClick={() => {OnDecrement(counter)}} className="btn btn-secondary btn-sm m-2"  disabled = {counter.value === 0? 'disabled':''}> - </button>
        <button onClick={() => {onDeleteProp(counter.id)}} className="btn btn-danger btn-sm m-2"> X </button><br/>
        {/* <ul>{this.renderTags()}</ul>
        <span className="text-warning">
          {this.state.tags.length === 0 && "Please enter a tag..."}
        </span> */}
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "m-2 badge badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const count = this.props.counter.value; 
    return count === 0 ? "Zero" : count;
  }

  
}

export default Counter;
