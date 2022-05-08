import React, { useEffect, useState } from 'react';
import { rocketListApi } from '../../api/RocketListApi';
import SingleRocketList from '../SingleRocketList/SingleRocketList';


const RocketList = () => {

    const [rocketList, setRocketList] = useState([]);

    // fetching rocket details
    useEffect(() => {
        fetch(rocketListApi)
            .then(res => res.json())
            .then(data => setRocketList(data))
    }, []);

    return (
        <div className="container">
            <div className="row row-cols-4 mt-5">
                {
                    rocketList.map(rc => <SingleRocketList rocket={rc} />)
                }
            </div>
        </div>
    );
};

export default RocketList;