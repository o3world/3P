import React from "react";

const SponsoredSeriesMasonryTile = (props) => {
    console.log(" --->", props);
    const story = {...props.data};
    const logo = (story.logo != null) ? story.logo.url : "https://upload.wikimedia.org/wikipedia/en/d/da/Rlbug_100x100.png";
    const backgroundImage = (story.mainImage)?story.mainImage.derivative.url: "https://upload.wikimedia.org/wikipedia/en/d/da/Rlbug_100x100.png";
    return (

        <div style={{"backgroundImage": backgroundImage}}>
            <h4><a href="#">{story.name}</a></h4>
            <img src={logo} alt={""}/>
        </div>

    );
};

export default SponsoredSeriesMasonryTile;