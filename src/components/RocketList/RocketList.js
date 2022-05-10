import React, { useEffect, useState } from 'react';
import { rocketListApi } from '../../api/RocketListApi';
import SingleRocketList from '../SingleRocketList/SingleRocketList';
import { useSelector } from 'react-redux';


const RocketList = () => {

    const [rocketList, setRocketList] = useState([]);

    // searched data from store
    const { searchKey } = useSelector((state) => state.searchReducer);
    // filtered data from store
    const { filterValue } = useSelector((state) => state.filterReducer);
    console.log("filter", filterValue)

    // fetching all rocket details
    useEffect(() => {
        fetch(rocketListApi)
            .then(res => res.json())
            .then(data => setRocketList(data))
    }, []);

    // fetching searched data
    useEffect(() => {
        fetch(`https://api.spacexdata.com/v3/launches/?rocket_name=${searchKey}`)
            .then(res => res.json())
            .then(data => setRocketList(data))
    }, [searchKey]);

    //  filtering data
    useEffect(() => {
        fetch(`https://api.spacexdata.com/v3/launches/?${filterValue}`)
            .then(res => res.json())
            .then(data => setRocketList(data))
    }, [filterValue]);

    return (
        <div className="container">
            <div className="row row-cols-4 mt-5">
                {
                    rocketList.map((rc, index) => <SingleRocketList key={index} rocket={rc} />)
                }
            </div>
        </div>
    );
};

export default RocketList;