import React, { Component } from 'react'; 

const ListGroup = (props) => {
    const {generes, OnGenereSelect, textProperty, idProperty, selectedItem} = props;
    return (
      <React.Fragment>
        <ul className="list-group">
          {generes.map(gener => (
            <li
              key={gener[idProperty]}
              className={
                gener === selectedItem
                  ? "list-group-item active"
                  : "list-group-item"
              }
              onClick={() => {
                OnGenereSelect(gener);
              }}
            >
              {gener[textProperty]}
            </li>
          ))}
        </ul>
      </React.Fragment>
    );
}
 
export default ListGroup;