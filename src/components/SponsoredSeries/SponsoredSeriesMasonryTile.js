import React from "react";

const SponsoredSeriesMasonryTile = (props) => {
    const story = props.data;
    const logo = (story.logo != null) ? story.logo.url : "https://upload.wikimedia.org/wikipedia/en/d/da/Rlbug_100x100.png";

    return (
        <div>
                <div>
                    <img src="https://images.pexels.com/photos/754082/pexels-photo-754082.jpeg?auto=compress&cs=tinysrgb&h=350" alt={''}/>
                </div>
                <div>
                    <h4>{story.name}</h4>
                </div>
                <img src={logo} alt={''}/>
        </div>
    );
};

export default SponsoredSeriesMasonryTile;