import React from "react";
import SetStoryInfo from "./SetStoryInfo";

const SetStory = (props) => {
    const objStory = props.data.taxonomyTermQuery.entities;
    return (
        objStory.map((story, index) => <SetStoryInfo data={story} key={index} />)
    );
}
export default SetStory;