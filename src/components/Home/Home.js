import React from 'react';
import FilterData from '../FilterData/FilterData';
import RocketList from '../RocketList/RocketList';
import Searchbar from '../Searchbar/Searchbar';

const Home = () => {
    return (
        <div>
            <div className="row bg-dark">
                <div className="col-8"><Searchbar /></div>
                <div className="col-3"><FilterData /></div>
            </div>
            <RocketList />
        </div>
    );
};

export default Home;