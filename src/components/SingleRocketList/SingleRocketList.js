import React from 'react';

const SingleRocketList = (props) => {
    const rockets = props.rocket;

    const { launch_date_local } = rockets;
    const { mission_name } = rockets;
    const { rocket_name } = rockets.rocket;
    const { mission_patch_small } = rockets.links;

    return (
        <div className="col">
            <div className="card mb-4 p-3" >
                <img src={mission_patch_small} className="card-img-top" alt="..." />
                <h4 className="card-text text-center">{rocket_name}</h4>
                <h5 className="card-text text-center">Mission Name: {mission_name}</h5>
                <p className="card-text text-center">Local Launch Date: {launch_date_local}</p>
            </div>
        </div>
    );
};

export default SingleRocketList;