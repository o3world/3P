import React from 'react';
import {Query} from "react-apollo";

import SeriesHeader from "./SeriesHeader";
import { SingleSeriesQuery } from "../SponsoredSeries/SponsoredSeriesQueries";
import SeriesStoriesMasonryWrapper from "./SeriesStoriesMasonryWrapper";

import styles from './SingleSeriesPage.module.scss';

const SingleSeriesPage = (props) => (
    <Query
        query={SingleSeriesQuery}
        variables={{"id": props.match.params.id}}
    >
      {({ loading, error, data }) => {
        if (loading) return "Loading...";
        if (error) return `Error! ${error.message}`;

        return (
            <section className={styles.wrapper}>
                <SeriesHeader {...data}/>
                <SeriesStoriesMasonryWrapper seriesId={props.match.params.id}/>
            </section>
        )
      }}
    </Query>
);

export default SingleSeriesPage;