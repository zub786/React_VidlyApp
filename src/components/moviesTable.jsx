import React, { Component } from 'react';
import Like from './common/like';
import {Paginate} from '../utils/paginate';
import Pagination from './common/pagination';
const MoviesTable = (props) => {
    const { pageSize, currentPage, movies: allMovies,
         selectedGenere, OnDelete, OnLike, OnPageChange } = props;
    // utility that is returning records specific to selected page in pagination

    // Filtering Movies Accordidng Genre

    const filtered = selectedGenere && selectedGenere.id
    ? allMovies.filter(i => i.genre === selectedGenere.text)
    : allMovies;
    const movies = Paginate(filtered, currentPage, pageSize);
    return ( 
        <React.Fragment>
        {" "}
    {movies.length > 0 ? (
      <p>Total Movies Are: {filtered.length}</p>
    ) : (
      <p>There is no movie</p>
    )}
    <table className="table">
          <thead>
            <tr>
              <th>Sr. #</th>
              <th>Title</th>
              <th>Gener</th>
              <th>Stock</th>
              <th>Rate</th>
              <th>Favourite</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {movies.map(m => (
              <tr key={m.id}>
                <td>{m.id}</td>
                <td>{m.title}</td>
                <td>{m.genre}</td>
                <td>{m.stock}</td>
                <td>{m.rate}</td>
                <td>
                  <Like movieObj={m} OnLikeToggle={OnLike} />
                </td>
                <td>
                  <button
                    onClick={() => OnDelete(m.id)}
                    href="#"
                    className="btn btn-sm btn-danger"
                  >
                    {" "}
                    Delete{" "}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="row">
              <Pagination
                itemsCount={filtered.length}
                pageSize={pageSize}
                OnPageChange={OnPageChange}
                currentPage={currentPage}
              />
            </div>{" "}
       </React.Fragment>
     );
}
 
export default MoviesTable;