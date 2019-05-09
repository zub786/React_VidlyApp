// import React, { Component } from 'react';

// class NavBar extends Component {
//     render() { 
//         return (
//           <nav className="navbar navbar-light bg-light">
//             <span className="navbar-brand mb-0 h1">Navbar</span>
//             <span className="pull-left badge badge-pill badge-secondary">{this.props.CountersLength}</span>
//           </nav>
//         );
//     }
// }
 
// export default NavBar;

// Now, No Need to use above Class Code when we have no need 
// To use all things of component class

// Stateless Functional Component
import React, { Component } from 'react';
const NavBar = ({CountersLength}) => {

    return (
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">Navbar</span>
        <span className="pull-left badge badge-pill badge-secondary">{CountersLength}</span>
      </nav>
    );
};


export default NavBar;