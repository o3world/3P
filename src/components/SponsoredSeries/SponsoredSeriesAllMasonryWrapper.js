import React from "react";
import { Query } from 'react-apollo';
import SponsoredSeriesMasonryTile from "./SponsoredSeriesMasonryTile";

import { AllSponsoredSeriesQuery } from './SponsoredSeriesQueries';

import styles from './SponsoredSeriesAllMasonryWrapper.module.scss';
import LoadingSpinner from "../Common/LoadingSpinner";

const SponsoredSeriesAllMasonryWrapper = () => {

    return (
        <Query
            query={ AllSponsoredSeriesQuery }
            variables={{}}
        >
          {({ loading, error, data }) => {
            if (loading) return (
                <LoadingSpinner/>
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
