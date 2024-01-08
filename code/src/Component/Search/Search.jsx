import React from "react";
import { useGlobalDataProvider } from "../Context/Context";
import './style.css';

const Search = () => {

    const {query, setQuery} = useGlobalDataProvider();

    return (
        <div className="Search">
            <div className="search-field">
                <input type="text" value={query} onChange={setQuery}/>
                <i className="fa fa-search"></i>
            </div>
        </div>
    )
}

export default Search;