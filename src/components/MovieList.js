import React from "react";
import Movie from "./Movie";

const MovieList = ({movieDB, setMovieDB, sortedMovieDB}) => {
    return (
        <div className="movie-container">
            <ul className="movie-list">
                {
                    sortedMovieDB.map(movie => (
                        <Movie key={movie.id} movie={movie} movieDB={movieDB} setMovieDB={setMovieDB}/>
                    ))
                }
            </ul>
        </div>
    );
};

export default MovieList;