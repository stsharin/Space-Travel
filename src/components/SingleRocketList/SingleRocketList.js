import React from 'react';

const SingleRocketList = (props) => {
    const rockets = props.rocket;

    const { launch_date_local } = rockets;
    const { rocket_name } = rockets.rocket;
    const { mission_patch_small } = rockets.links;
    // const { launch_success } = rockets;

    return (
        <div className="col">
            <div className="card mb-4" style={{ style: '18rem' }}>
                <img src={mission_patch_small} className="card-img-top" alt="..." />
                <h5 className="card-text">{rocket_name}</h5>
                <p className="card-text">{launch_date_local}</p>
            </div>
        </div>
    );
};

export default SingleRocketList;