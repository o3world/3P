import React from "react";
import Moment from 'react-moment';

const StoryMasonryTile = (props) => {
    const story = {...props.data};
    console.log("--->", story);
    const backgroundImage =  story.fieldFeaturedImageTall.url;
    return (
        <div style={{backgroundImage: `url(`+backgroundImage+`)`}}>
            <p>{story.field3pSpecialSeries}</p>
            <p>{story.entityOwner.name}</p>
            <time><Moment format="YYYY MMM DD">{story.changedentityCreated}</Moment></time>
            <h2><a href={story.entityUrl}>{story.title}</a></h2>
        </div>
    );
};
export default StoryMasonryTile;