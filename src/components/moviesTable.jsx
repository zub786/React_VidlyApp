import React, { Component } from 'react';
import Like from './common/like';
import {Paginate} from '../utils/paginate';
import Pagination from './common/pagination';
import _ from 'lodash'

class MoviesTable extends Component {

    raiseSort = path => {
        const sortColumn = {...this.props.sortColumn};
        if(sortColumn.path === path)
        sortColumn.order = (sortColumn.order === 'asc') ? 'desc': 'asc';
        else{
        sortColumn.path = path;
        sortColumn.order = 'asc';
        }
        this.props.OnSort(sortColumn);
    };


    render() { 
        const { pageSize, currentPage, movies: allMovies,
            selectedGenere, OnDelete, OnLike, OnPageChange, sortColumn } = this.props;
       
            // utility that is returning records specific to selected page in pagination
       // Filtering Movies Accordidng Genre
   
       const filtered = selectedGenere && selectedGenere.id
       ? allMovies.filter(i => i.genre === selectedGenere.text)
       : allMovies;
       const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order])
       const movies = Paginate(sorted, currentPage, pageSize);
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
                 <th onClick={() => {this.raiseSort('id')}}>Id</th>
                 <th onClick={() => {this.raiseSort('title')}}>Title</th>
                 <th onClick={() => {this.raiseSort('genre')}}>Gener</th>
                 <th onClick={() => {this.raiseSort('stock')}}>Stock</th>
                 <th onClick={() => {this.raiseSort('rate')}}>Rate</th>
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
}
 
export default MoviesTable;