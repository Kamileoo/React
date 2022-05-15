import React from "react";

const MovieSort = ({movieDB, setMovieDB, setSortType}) => {
    return (
        <div className="sortHub">
            <select onChange={(e) => setSortType(e.target.value)} className="choose-sort chooser">
                <option value="date-asc">Date added ascending</option>
                <option value="date-desc">Date added descending</option>
                <option value="rating-asc">Rating ascending</option>
                <option value="rating-desc">Rating descending</option>
                <option value="name-asc">Name ascending</option>
                <option value="name-desc">Name descending</option>
            </select>
        </div>
    )
};

export default MovieSort;