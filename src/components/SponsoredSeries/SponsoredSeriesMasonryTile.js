import React from "react";

const SponsoredSeriesMasonryTile = (props) => {
    const series = {...props.data};
    const logo = (series.logo !== null) ? series.logo.url : "https://upload.wikimedia.org/wikipedia/en/d/da/Rlbug_100x100.png";
    const backgroundImage = (series.mainImage) ? series.mainImage.derivative.url : "https://upload.wikimedia.org/wikipedia/en/d/da/Rlbug_100x100.png";
    return (

        <div style={{"backgroundImage": backgroundImage}}>
            <h4><a href="#">{series.name}</a></h4>
            <img src={logo} alt={""}/>
        </div>

    );
};

export default SponsoredSeriesMasonryTile;