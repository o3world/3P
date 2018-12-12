import React from "react";
import Moment from 'react-moment';

import styles from './StoryMasonryTile.module.scss';

const StoryMasonryTile = (props) => {
    const story = {...props.data};
    const backgroundImage =  story.fieldFeaturedImageTall.url;

    return (
        <div className={styles.tile} style={{backgroundImage: `url(`+backgroundImage+`)`}}>
          <h2 className={styles.title}><a href={story.entityUrl}>{story.title}</a></h2>
          <p className={styles.category}>CATEGORY{/* @TODo Add category */}</p>
          <p className={styles.sponsored}>SPONSORED</p>
          <p className={styles.author}>Words by {story.entityOwner.name}</p>
          <time className={styles.date}><Moment format="MMM DD">{story.changedentityCreated}</Moment></time>
        </div>
    );
};
export default StoryMasonryTile;