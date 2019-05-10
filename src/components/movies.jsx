import React, { Component } from 'react';
import Like from './common/like';
import Pagination from './common/pagination';
import {Paginate} from '../utils/paginate';
import ListGroup from './listGroup'
export class Movie extends Component {
  state = {
    movies: [],
    generes: [],
    pageSize: 3,
    currentPage: 1
  };

  componentDidMount() {
    this.setState({
      movies: [
        { id: 1, title: "abc", genre: "Action", stock: 200, rate: 3.5 },
        { id: 2, title: "eee", genre: "Comedy", stock: 230, rate: 1.5 },
        { id: 3, title: "dee", genre: "Technology", stock: 220, rate: 3.5 },
        { id: 4, title: "sdsd", genre: "Action", stock: 205, rate: 6.5 },
        {
          id: 5,
          title: "dede",
          genre: "Technology",
          stock: 202,
          rate: 6.5
        },
        { id: 6, title: "jhk", genre: "Comedy", stock: 223, rate: 3.5 },
        { id: 7, title: "dgr", genre: "Technology", stock: 256, rate: 3.5 },
        { id: 8, title: "ewd", genre: "Science", stock: 453, rate: 2.5 }
      ],
      generes: [
        { text: "All Genre" },
        { text: "Action", id: 1 },
        { text: "Comedy", id: 2 },
        { text: "Technology", id: 3 },
        { text: "Science", id: 4 }
      ]
    });
  }

  handleDelete = mid => {
    console.log(mid);
    const updatedMovies = this.state.movies.filter(m => m.id !== mid);
    console.log(updatedMovies);
    this.setState({ movies: updatedMovies });
  };
  handleToggleLike = movie => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };
  handlePageChange = page => {
    this.setState({ currentPage: page });
  };
  handleGenereSelet = genere => {
      this.setState({selectedGenere: genere, currentPage: 1});
  };
  render() {
    const { pageSize, currentPage, movies: allMovies, selectedGenere } = this.state;
    // utility that is returning records specific to selected page in pagination

    // Filtering Movies Accordidng Genre

    const filtered = selectedGenere && selectedGenere.id
    ? allMovies.filter(i => i.genre === selectedGenere.text)
    : allMovies;
    const movies = Paginate(filtered, currentPage, pageSize);
    return (
      <React.Fragment>
          <br/>
        <div className="row">
          <div className="col-md-3">
            <ListGroup 
            generes={this.state.generes} 
            OnGenereSelect={this.handleGenereSelet}
            textProperty="text"
            idProperty="id"
            selectedItem={selectedGenere} />
          </div>
          <div className="col-md-9">
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
                      <Like movieObj={m} OnLikeToggle={this.handleToggleLike} />
                    </td>
                    <td>
                      <button
                        onClick={() => this.handleDelete(m.id)}
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
                OnPageChange={this.handlePageChange}
                currentPage={currentPage}
              />
            </div>{" "}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
 