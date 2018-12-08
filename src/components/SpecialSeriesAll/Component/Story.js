import React from "react";
import StoryInfo from "./StoryInfo";

const Story = (props) => {
    const objStory = props.data.taxonomyTermQuery.entities;
    return (
        objStory.map((story, index) => <StoryInfo data={story} key={index}/>)
    );
}
export default Story;