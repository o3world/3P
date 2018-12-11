import React from "react";
import SponsoredSeriesMasonryTile from "./SponsoredSeriesMasonryTile";

const SponsoredSeriesAllMasonryWrapper = (props) => {
    const series = props.data.taxonomyTermQuery.entities;
    return (
        series.map((story, index) => <SponsoredSeriesMasonryTile data={story} key={index}/>)
    );
};

export default SponsoredSeriesAllMasonryWrapper;