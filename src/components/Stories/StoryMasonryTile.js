import React from "react";
import Moment from 'react-moment';

const StoryMasonryTile = (props) => {
    const story = {...props.data};
    const backgroundImage = (story.fieldFeaturedImageSquare.url) ? story.fieldFeaturedImageSquare.url : "https://upload.wikimedia.org/wikipedia/en/d/da/Rlbug_100x100.png";
    return (
        <div style={{"backgroundImage": backgroundImage}}>
            <p>{story.field3pSpecialSeries}</p>
            <p>{story.entityOwner.name}</p>
            <time><Moment format="YYYY MMM DD">{story.changedentityCreated}</Moment></time>
            <h2><a href={story.entityUrl}>{story.title}</a></h2>
        </div>
    );
};
export default StoryMasonryTile;