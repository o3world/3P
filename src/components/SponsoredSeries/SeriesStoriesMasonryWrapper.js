import React from "react";
import { Query } from 'react-apollo';

import StoryMasonryTile from "../Stories/StoryMasonryTile";
import { StoriesBySeriesId } from "../Stories/StoryQueries";

import styles from './SeriesStoriesMasonryWrapper.module.scss';
import LoadingSpinner from "../Common/LoadingSpinner";

const SeriesStoriesMasonryWrapper = (props) => (
  <Query
      query = {StoriesBySeriesId}
      variables = {{"id": props.seriesId}}
  >
    {({ loading, error, data }) => {
      if (loading) return <LoadingSpinner/>;
      if (error) return `Error! ${error.message}`;

      return (
          <section className={styles.wrapper}>
            { data.nodeQuery.entities.map((story) => {
              story.date.value = story.date.value * 1000; // Converts Unix timestamp to JavaScript timestamp (seconds to milliseconds)
              return <StoryMasonryTile data={story} key={story.id} context={'singleSeries'}/>
            })}
          </section>
      )
    }}
  </Query>
);

export default SeriesStoriesMasonryWrapper;
