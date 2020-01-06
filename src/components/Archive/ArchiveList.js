import React from 'react'
import { Query } from "react-apollo"
import { Link } from 'react-router-dom'
import { StoriesByDates } from "../Stories/StoryQueries"

import moment from 'moment'

import LoadingSpinner from "../Common/LoadingSpinner"

import styles from './ArchivePage.module.scss'

const ArchiveList = (props) =>
  <Query
      query={StoriesByDates}
      variables={{startDate: props.start, endDate: props.end}}
  >
    {({ loading, error, data }) => {
      if (loading) return (
          <LoadingSpinner/>
    );
      if (error) return `Error! ${error.message}`;
      const stories = data.nodeQuery.entities;

      return (
          <section className={styles.storyList}>
            {stories.map((story, index) => 
                <h5 className={styles.storyTitle}><Link to={`/story/${moment(story.date.value * 1000).year()}${story.entityUrl.path}/${story.id}/`}>{story.title}</Link></h5>
            )}
          </section>
      );
    }}
  </Query>;

export default ArchiveList;