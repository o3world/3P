import React from "react";

import styles from './FeaturedSponsoredSeries.module.scss';

const FeaturedSponsoredSeries = (props) => {
    let series = props.data.taxonomyTermQuery.entities[0];
    series =  (series !== undefined)? series: {"mainImage": {"derivative":{"url":""}}, "company": "", "logo":{"url":""}, "name": ""};
    return (
        <div className={styles.seriesWrapper}>
            <img className={styles.heroImage} src={series.mainImage.derivative.url} alt={''}/>
            <div className={styles.metaWrapper}>
                <div className={styles.logoWrapper}>
                  <p className={styles.logoTitle}>Featured Sponsor</p>
                  <img className={styles.logo} src={series.logo.url} alt={series.company} />
                </div>
                <div className={styles.meta}>
                    <span className={styles.company}>{series.company} Sponsored Series</span>
                    <h3 className={styles.title}>{series.name}</h3> {/* @TODO Need to make this a link when we have single series route. */}
                    <button className={styles.exploreButton}>Explore Series</button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedSponsoredSeries;