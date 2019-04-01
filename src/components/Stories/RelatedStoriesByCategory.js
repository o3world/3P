import React from "react"
import {Query} from "react-apollo"
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import StoryMasonryTile from "./StoryMasonryTile"
import { StoriesByCategory } from "./StoryQueries"

import styles from './RelatedStoriesByCategory.module.scss'

const RelatedStoriesByCategory = (props) => {
console.log(props);
    return (
        <Query
            query={StoriesByCategory}
            variables={{"id": props.categoryID, "limit": 10}}
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

            let catCleanName = props.categoryName.replace(/&/g, ' ').replace(/\s+/g, '-').toLowerCase();
            let category = <h3 className={styles.sectionHeading}><Link to={`/category/${catCleanName}/${props.categoryID}`}>More stories from {props.categoryName}</Link></h3>;

            return (
              <section className={styles.wrapper}>
                {category}
                <div className={styles.tilesWrapper}>
                  {stories.map((story, index) => <StoryMasonryTile data={story} key={index} hideCategory={true}/>)}
                </div>
              </section>
            );
          }}
        </Query>
    )
};

export default RelatedStoriesByCategory;