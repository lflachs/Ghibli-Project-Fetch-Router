import React from "react";
import "./Movie.css";
import { Link } from "react-router-dom";

function Movie({ title, year, id }) {
    return (
        <Link to={`/film/${id}`} >
            <div className="card">
                <h1 className="title">{title} </h1>
                <h2 className="year">{year}</h2>

            </div>
        </Link>

    )
}

export default Movie;