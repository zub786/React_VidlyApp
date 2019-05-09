import React, { Component } from 'react';
class Like extends Component {
    render() { 
        let classes = 'fa fa-heart';
        !this.props.movieObj.liked? classes += '-o': classes += '';
        return ( <i className={classes} onClick={() => {this.props.OnLikeToggle(this.props.movieObj)}} area-hidden="true"></i> );
    }
}
 
export default Like;