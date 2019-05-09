import React, { Component } from 'react';
import _ from 'lodash'
import PropTypes from 'prop-types'
const Pagination = (props) => {
    const {itemsCount, currentPage, pageSize} = props;
    const noOfPages = itemsCount / pageSize;
    const pagesArray = _.range(1, noOfPages + 1);

    return (
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          {pagesArray.map(page => (
            <li key={page} className={page === currentPage? 'page-item active': 'page-item'}>
              <a className="page-link" href="#" onClick={() => {props.OnPageChange(page)}}>
                {page}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
}

Pagination.propTypes = {
    itemsCount: PropTypes.number.isRequired,
    currentPage: PropTypes.number,
    pageSize: PropTypes.number
};
export default Pagination;