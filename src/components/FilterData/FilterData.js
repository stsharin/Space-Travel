import React from 'react';

const FilterData = () => {
    return (
        <div className="dropdown">
            <a className="btn border dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                Filter Data
            </a>

            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li><a className="dropdown-item" href="#">Launch Date
                </a></li>
                <li><a className="dropdown-item" href="#">Launch Status</a></li>
                <li><a className="dropdown-item" href="#">Up comings</a></li>
            </ul>
        </div>
    );
};

export default FilterData;