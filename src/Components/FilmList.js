import React from "react";
import FilmCard from './FilmCard';
import moviesArray from './movies';

class FilmList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: moviesArray
        }
    }
    onAddCard = () => {
        moviesArray.push({ id: 2, title: 'hello world', years: 1883 });
        this.setState({
            movies: moviesArray
        });
    }

    render() {
        const { movies } = this.state;
        console.log(movies)
        return (
            <section>

                <div className="card-container" >
                    {
                        movies.map((elem) => {
                            return <FilmCard key={elem.id} id={elem.id} title={elem.title} year={elem.year} />
                        })
                    }
                    <div className="card" onClick={this.onAddCard}>
                        +
                </div>
                </div>
            </section>
        )
    }
}
export default FilmList;