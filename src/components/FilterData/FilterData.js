import React from 'react';

const FilterData = () => {
    return (
        <div className="dropdown float-end mt-2">

            <button className="btn border dropdown-toggle text-white" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                <span className='text-white'>Filter Rocket Details</span>
            </button>

            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li>
                    <button className="dropdown-item bg-dark text-white" href="..">Launch Date</button>
                    <ul>
                        <li><a className="dropdown-item" href="..">Last Week</a></li>
                        <li><a className="dropdown-item" href="..">Last Month</a></li>
                        <li><a className="dropdown-item" href="..">Last Year</a></li>
                    </ul>
                </li>

                <li>
                <button className="dropdown-item bg-dark text-white" href="..">Launch Status</button>
                    <ul>
                        <li><a className="dropdown-item" href="..">Success</a></li>
                        <li><a className="dropdown-item" href="..">Failure</a></li>
                    </ul>
                </li>

                <li>
                <button className="dropdown-item bg-dark text-white" href="..">Upcoming</button>
                    <ul>
                        <li><a className="dropdown-item" href="..">Yes</a></li>
                        <li><a className="dropdown-item" href="..">No</a></li>
                    </ul>
                </li>

            </ul>
        </div>
    );
};

export default FilterData;