import React from "react";

const SponsoredSeriesMasonryTile = (props) => {
    const series = {...props.data};
    const logo = (series.logo !== null) ? series.logo.url : "https://upload.wikimedia.org/wikipedia/en/d/da/Rlbug_100x100.png";
    const backgroundImage = (series.mainImage) ? series.mainImage.derivative.url : "https://upload.wikimedia.org/wikipedia/en/d/da/Rlbug_100x100.png";
    return (

        <div style={{"backgroundImage": backgroundImage}}>
            <h4>{series.name}</h4> {/* @TODO Need to make this a link when we have single series route. */}
            <img src={logo} alt={""}/>
        </div>

    );
};

export default SponsoredSeriesMasonryTile;