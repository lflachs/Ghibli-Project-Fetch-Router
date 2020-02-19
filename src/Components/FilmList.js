import React from "react";
import FilmCard from "./FilmCard";
import moviesArray from "./movies";

// https://ghibliapi.herokuapp.com/films

class FilmList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  getAPI() {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then(res => res.json())
      .then(results => {
        this.setState({
          movies: results
        });
        console.log(this.state.movies);
      });
  }
  componentDidMount() {
    this.getAPI();
  }
  render() {
    const { movies } = this.state;
    console.log(movies);
    return (
      <section>
        <div className="card-container">
          {movies.map(elem => {
            return (
              <FilmCard
                key={elem.id}
                id={elem.id}
                title={elem.title}
                year={elem.year}
              />
            );
          })}
        </div>
      </section>
    );
  }
}
export default FilmList;
