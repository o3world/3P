import React from "react";
import {Query} from "react-apollo";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import StoryMasonryTile from "../Stories/StoryMasonryTile";
import { StoriesByAuthor } from "./EditorsQueries";

import styles from '../Stories/StoriesMasonryWrapper.module.scss';

const EditorStoriesWrapper = (props) => {

    return (
        <Query
            query={StoriesByAuthor}
            variables={{"id": props.editorId}}
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
                  {stories.map((story, index) => {
                    story.date.value = story.date.value * 1000; // Converts Unix timestamp to JavaScript timestamp (seconds to milliseconds)
                    return <StoryMasonryTile data={story} key={index}/>
                  })}
                </section>
            );
          }}
        </Query>
    )
};

export default EditorStoriesWrapper;