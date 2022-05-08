import React from 'react';
import FilterData from '../FilterData/FilterData';
import RocketList from '../RocketList/RocketList';
import Searchbar from '../Searchbar/Searchbar';

const Home = () => {
    return (
        <div>
            <Searchbar/>
            <FilterData/>
            <RocketList/>
        </div>
    );
};

export default Home;