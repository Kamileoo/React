import React from "react";

const Search = ({setSearch, search}) => {
    return (
        <div className="search-box">
            <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search" className="search-field field" />
        </div>
    )
}

export default Search;