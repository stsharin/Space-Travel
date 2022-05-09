import React, { useEffect, useState } from 'react';
import { rocketListApi } from '../../api/RocketListApi';
import SingleRocketList from '../SingleRocketList/SingleRocketList';
import { useSelector } from 'react-redux';


const RocketList = () => {

    const [rocketList, setRocketList] = useState([]);

    const {list} = useSelector((state) => state.searchReducer);
    console.log(list)

    // fetching all rocket details
    useEffect(() => {
        fetch(rocketListApi)
            .then(res => res.json())
            .then(data => setRocketList(data))
    }, []);

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