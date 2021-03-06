import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchRockets } from '../../redux/actions/SearchbarAction';

const Searchbar = () => {

    const [searchValue, setSearchValue] = useState("");
    const dispatch = useDispatch();

    const handleSearch = () =>{
        console.log("clicked search value")
        dispatch(fetchRockets(searchValue));
    }

    const handleInput = (event) => {
        const value = (event.target.value);
        setSearchValue(value);
    }

    return (
        <div>
            <nav className="navbar">
                <div className="container-fluid">
                    <a href="/" className="navbar-brand text-white">Space Travel</a>
                    <div className="d-flex">
                        <input onChange={handleInput} className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button onClick={handleSearch} className="btn btn-outline-primary" type="submit">Search</button>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Searchbar;