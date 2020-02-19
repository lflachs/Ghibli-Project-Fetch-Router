import React from "react";
import Movies from "./movies";
import { Link } from "react-router-dom";

class Filmpage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filmDetail: {}
    };
  }

  componentDidMount() {
    const filmId = this.props.match.params.id;
    fetch(`https://ghibliapi.herokuapp.com/films/${filmId}`)
      .then(response => {
        return response.json();
      })
      .then(filmDetailApi => {
        this.setState({ filmDetail: filmDetailApi });
        console.log(this.state.filmDetail);
      });
  }

  //   https://ghibliapi.herokuapp.com/films/filmId
  render() {
    const { filmDetail } = this.state;
    return (
      <div>
        <Link to="/">Back to homepage</Link>
        <h1>{filmDetail.title}</h1>
        <p>{filmDetail.description}</p>
      </div>
    );
  }
}

export default Filmpage;
