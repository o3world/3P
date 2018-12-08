import React from "react";
import SponsoredSeriesMasonryTile from "./SponsoredSeriesMasonryTile";

const SponsoredSeriesAllMasonryWrapper = (props) => {
    const objStory = props.data.taxonomyTermQuery.entities;
    return (
        objStory.map((story, index) => <SponsoredSeriesMasonryTile data={story} key={index}/>)
    );
};

export default SponsoredSeriesAllMasonryWrapper;