import React from 'react';
import {Query} from "react-apollo";

import SeriesHeader from "./SeriesHeader";
import { SingleSeriesQuery } from "../SponsoredSeries/SponsoredSeriesQueries";
import SeriesStoriesMasonryWrapper from "./SeriesStoriesMasonryWrapper";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import styles from './SingleSeriesPage.module.scss';
import LoadingSpinner from "../Common/LoadingSpinner";

const SingleSeriesPage = (props) => (
    <Query
        query={SingleSeriesQuery}
        variables={{"id": props.match.params.id}}
    >
      {({ loading, error, data }) => {
        if (loading) return <LoadingSpinner/>;
        if (error) return `Error! ${error.message}`;

        return (
            <section className={styles.wrapper}>
                <Header />
                <SeriesHeader {...data}/>
                <SeriesStoriesMasonryWrapper seriesId={props.match.params.id}/>
                <Footer />
            </section>
        )
      }}
    </Query>
);

export default SingleSeriesPage;