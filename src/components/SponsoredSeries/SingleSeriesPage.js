import React from 'react'
import {Query} from "react-apollo"
import { Helmet } from 'react-helmet'

import SeriesHeader from "./SeriesHeader"
import { SingleSeriesQuery } from "../SponsoredSeries/SponsoredSeriesQueries"
import SeriesStoriesMasonryWrapper from "./SeriesStoriesMasonryWrapper"
import LoadingSpinner from "../Common/LoadingSpinner"
import PageTemplate from "../Common/PageTemplate"

const SingleSeriesPage = (props) => (
    <Query
        query={SingleSeriesQuery}
        variables={{"id": props.match.params.id}}
    >
      {({ loading, error, data }) => {
        if (loading) return <LoadingSpinner/>;
        if (error) return `Error! ${error.message}`;

        return (
            <PageTemplate>
              <Helmet>
                <title>{data.series.name}</title>
              </Helmet>
              <SeriesHeader {...data}/>
              <SeriesStoriesMasonryWrapper seriesId={props.match.params.id}/>
            </PageTemplate>
        )
      }}
    </Query>
);

export default SingleSeriesPage;