import React from "react";
import { Query } from 'react-apollo';

import StoryMasonryTile from "../Stories/StoryMasonryTile";
import styles from '../Stories/StoriesMasonryWrapper.module.scss';
import { StoriesBySeriesId } from "../Stories/StoryQueries";

const SeriesStoriesMasonryWrapper = (props) => (
  <Query
      query = {StoriesBySeriesId}
      variables = {{"id": props.seriesId}}
  >
    {({ loading, error, data }) => {
      if (loading) return "Loading...";
      if (error) return `Error! ${error.message}`;

      return (
          <section>
            { data.nodeQuery.entities.map((story) =>
                <StoryMasonryTile data={story} key={story.id} isSponsered={true} />
            )}
          </section>
      )
    }}
  </Query>
);

export default SeriesStoriesMasonryWrapper;