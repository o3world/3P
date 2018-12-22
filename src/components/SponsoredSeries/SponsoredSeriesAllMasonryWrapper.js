import React from "react";
import { Query } from 'react-apollo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SponsoredSeriesMasonryTile from "./SponsoredSeriesMasonryTile";

import { AllSponsoredSeriesQuery } from './SponsoredSeriesQueries';

import styles from './SponsoredSeriesAllMasonryWrapper.module.scss';

const SponsoredSeriesAllMasonryWrapper = () => {

    return (
        <Query
            query={ AllSponsoredSeriesQuery }
            variables={{}}
        >
          {({ loading, error, data }) => {
            if (loading) return (
                <div className={styles.spinner}>
                  <p>Gathering related stories...</p>
                  <FontAwesomeIcon icon="spinner" spin/>
                </div>
            );
            if (error) return `Error! ${error.message}`;
            const allSeries = data.taxonomyTermQuery.entities;

            return (
                <section className={styles.wrapper}>
                  {allSeries.map((series, index) => <SponsoredSeriesMasonryTile data={series} key={index} />)}
                </section>
            );
          }}
        </Query>
    );
};

export default SponsoredSeriesAllMasonryWrapper;