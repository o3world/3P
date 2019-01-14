import React from "react";
import { Query } from 'react-apollo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ConvertSeoUrl from "../Common/createSeoUrl";

import { FeaturedSponsoredSeriesQuery } from "./SponsoredSeriesQueries";
import styles from './FeaturedSponsoredSeries.module.scss';

const FeaturedSponsoredSeries = (props) => {

    return (
        <Query
            query={ FeaturedSponsoredSeriesQuery }
            variables={{}}
        >
          {({ loading, error, data }) => {
            if (loading) return (
                <div className={styles.spinner}>
                  <p>Grabbing the featured series...</p>
                  <FontAwesomeIcon icon="spinner" spin/>
                </div>
            );
            if (error) return `Error! ${error.message}`;
            const series = data.taxonomyTermQuery.entities[0];

            const url = "/sponsored-series/" + series.tid + "/" + ConvertSeoUrl(series.name);

            return (
                <div className={styles.seriesWrapper}>
                  <img className={styles.heroImage} src={series.heroImage.derivative.url} alt={''}/>
                  <div className={styles.metaWrapper}>
                    <div className={styles.logoWrapper}>
                      <p className={styles.logoTitle}>Featured Sponsor</p>
                      <img className={styles.logo} src={series.logo.url} alt={series.company} />
                    </div>
                    <div className={styles.meta}>
                      <span className={styles.company}>{series.company} Sponsored Series</span>
                      <h3 className={styles.title}><a href={url}>{series.name}</a></h3>
                      <a href={url} className={styles.exploreButton}>Explore Series</a>
                    </div>
                  </div>
                </div>
            );
          }}
        </Query>
    );
};

export default FeaturedSponsoredSeries;