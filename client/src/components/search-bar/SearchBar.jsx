import { useState } from 'react';
import './SearchBar.css';
import { IoSearch } from "react-icons/io5";

const SearchBar = () => {

    const [search, setSearch] = useState("");

    return (
        <>
            <div className="search-bar">
                <IoSearch className="search-icon" />
                <input
                    type="text"
                    placeholder="Search here"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
        </>
    )
}

export default SearchBar
