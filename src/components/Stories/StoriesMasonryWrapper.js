import React from "react";
import StoryMasonryTile from "./StoryMasonryTile";

const StoriesMasonryWrapper = (props) => {
    const stories = props.data.nodeQuery.entities;
    return (
        <div>
            {stories.map((story, index) => <StoryMasonryTile data={story} key={index}/>)}
        </div>
    );
};

export default StoriesMasonryWrapper;
