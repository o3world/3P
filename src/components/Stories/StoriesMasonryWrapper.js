import React from "react";
import {Query} from "react-apollo";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import StoryMasonryTile from "./StoryMasonryTile";
import { AllStoryQuery } from "./StoryQueries";

import styles from '../Stories/StoriesMasonryWrapper.module.scss';

const StoriesMasonryWrapper = () =>
  <Query
      query={AllStoryQuery}
      variables={{}}
  >
    {({ loading, error, data }) => {
      if (loading) return (
          <div className={styles.spinner}>
            <p>Gathering Stories...</p>
            <FontAwesomeIcon icon="spinner" spin/>
          </div>
    );
      if (error) return `Error! ${error.message}`;
      const stories = data.nodeQuery.entities;

      return (
          <section className={styles.wrapper}>
            {stories.map((story, index) => <StoryMasonryTile data={story} key={index}/>)}
          </section>
      );
    }}
  </Query>;

export default StoriesMasonryWrapper;
