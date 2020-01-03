import React from "react";
import {Query} from "react-apollo";

import StoryMasonryTile from "./StoryMasonryTile";
import { AllStoryQuery } from "./StoryQueries";

import styles from '../Stories/StoriesMasonryWrapper.module.scss';
import LoadingSpinner from "../Common/LoadingSpinner";

const StoriesMasonryWrapper = () =>
  <Query
      query={AllStoryQuery}
      variables={{}}
  >
    {({ loading, error, data }) => {
      if (loading) return (
          <LoadingSpinner/>
    );
      if (error) return `Error! ${error.message}`;
      const stories = data.nodeQuery.entities;

      return (
          <section className={styles.wrapper}>
            {stories.map((story, index) => {
              story.date.value = story.date.value * 1000; // Convert Unix timestamp to JavaScript timestamp (seconds to milliseconds)
              return <StoryMasonryTile data={story} key={index}/>
            }
            )}
          </section>
      );
    }}
  </Query>;

export default StoriesMasonryWrapper;
