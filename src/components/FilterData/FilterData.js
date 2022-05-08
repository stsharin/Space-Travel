import React from 'react';

const FilterData = () => {
    return (
        <div class="dropdown">
            <a class="btn border dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                Filter Data
            </a>

            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li><a class="dropdown-item" href="#">Launch Date
                </a></li>
                <li><a class="dropdown-item" href="#">Launch Status</a></li>
                <li><a class="dropdown-item" href="#">Up comings</a></li>
            </ul>
        </div>
    );
};

export default FilterData;