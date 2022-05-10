import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterUpComings } from '../../redux/actions/FilterAction';

const FilterData = () => {

    // const [filterValue, setFilterValue] = useState("")
    const dispatch = useDispatch();

    // handling filter value
    const handleFilter = (e) => {
        let value = e.target.value;
        console.log(value)
        dispatch(filterUpComings(value));
    }

    return (
        <div className="short-by">
            <div className="form-group pt-2">
                <select onChange={handleFilter} defaultValue={'DEFAULT'} name="sort_by" className="form-control">
                    <option value="DEFAULT" disabled>Filter data</option>

                    <option disabled>Launch Status</option>
                    <optgroup>
                        <option value="launch_success=true">Success</option>
                        <option value="launch_success=false">Failure</option>
                    </optgroup>

                </select>
            </div>
        </div>
    );
};

export default FilterData;