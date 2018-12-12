import React from "react";
import SponsoredSeriesMasonryTile from "./SponsoredSeriesMasonryTile";

import styles from './SponsoredSeriesAllMasonryWrapper.module.scss';

const SponsoredSeriesAllMasonryWrapper = (props) => {
    const series = props.data.taxonomyTermQuery.entities;
    return (
        <div className={styles.wrapper}>
          {series.map((series, index) => <SponsoredSeriesMasonryTile data={series} key={index}/>)}
        </div>
    );
};

export default SponsoredSeriesAllMasonryWrapper;