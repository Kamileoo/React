import React, {useState} from "react";

const Movie = ({movie, movieDB, setMovieDB}) => {

    const deleteHandler = () => {
        setMovieDB(movieDB.filter(el => el.id !== movie.id));
    }

    const ratingChange = (e) => {
        setMovieDB(movieDB.map((item) => {
            if (item.id === movie.id) {
                return {
                    ...item, rating: e.target.value
                }
            }
            return item;
        }))
    }

    return (
        <div className="movie">
            {/* <img src={"./posters/" + movie.id + ".jpg"}/> */}
            <img src={movie.image}/>
            <div className="movie-item-text">
                <li className="movie-item-name">{movie.name}</li>
                <li className="movie-item-desc">{movie.description}</li>
            </div>
            <select value={movie.rating} onChange={ratingChange} name="ratings-change" className="movie-item-rating-change chooser">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <button onClick={deleteHandler} className="movie-item-remove myButton">Remove</button>
        </div>
    );
};

export default Movie;