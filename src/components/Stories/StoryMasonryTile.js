import React from "react";
import Moment from 'react-moment';

import styles from './StoryMasonryTile.module.scss';

const StoryMasonryTile = (props) => {
    const story = {...props.data};
    const backgroundImage =  story.fieldFeaturedImageTall.url;

    return (
        <div className={styles.tile} style={{backgroundImage: `url(`+backgroundImage+`)`}}>
          <h2 className={styles.title}><a href={story.entityUrl}>{story.title}</a></h2>
          <p className={styles.sponsored}>{story.field3pSpecialSeries}</p>
          <p className={styles.author}>{story.entityOwner.name}</p>
          <time className={styles.date}><Moment format="YYYY MMM DD">{story.changedentityCreated}</Moment></time>
        </div>
    );
};
export default StoryMasonryTile;