// import { useState } from 'react';
import './SearchBar.css';
import { IoSearch } from "react-icons/io5";

const SearchBar = ({ search, setSearch }) => {

    // const [search, setSearch] = useState("");

    return (
        <>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search here"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <IoSearch className="search-icon" />
            </div>
        </>
    )
}

export default SearchBar
