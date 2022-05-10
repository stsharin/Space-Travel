import React from 'react';
import { useDispatch } from 'react-redux';
import { filterRocketDetails } from '../../redux/actions/FilterAction';

const FilterData = () => {

    const dispatch = useDispatch();

    // handling filter value
    const handleFilter = (e) => {
        let value = e.target.value;
        console.log(value)
        dispatch(filterRocketDetails(value));
    }

    return (
        <div className="short-by">
            <div className="form-group pt-2">
                <select onChange={handleFilter} defaultValue={'DEFAULT'} name="sort_by" className="form-control">
                    <option value="DEFAULT" disabled>Filter Rocket Details</option>

                    {/* // filter by Launch status */}
                    <option disabled>Launch Status</option>
                    <optgroup>
                        <option value="launch_success=true">Success</option>
                        <option value="launch_success=false">Failure</option>
                    </optgroup>

                    {/* // filter by Up Coming */}
                    <option disabled>By Launch Date</option>
                    <optgroup>
                        <option>Last Week</option>
                        <option>Last Month</option>
                        <option>Last Year</option>
                    </optgroup>

                    {/* // filter by Up Coming */}
                    <option disabled>Up coming</option>
                    <optgroup>
                        <option>Yes</option>
                        <option>No</option>
                    </optgroup>

                </select>
            </div>
        </div>
    );
};

export default FilterData;