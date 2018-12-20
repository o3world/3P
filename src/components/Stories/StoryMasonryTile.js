import React from "react";
import Moment from 'react-moment';
import styles from './StoryMasonryTile.module.scss';

import ConvertSeoUrl from "../Common/createSeoUrl";

const StoryMasonryTile = (props) => {
    const story = {...props.data};
    const backgroundImage =  story.tallImage.url;
    const seoLink = '/story/' + story.id + '/' + ConvertSeoUrl(story.title);

    let sponsored;
    if (story.sponsoredBy !== null) {
      sponsored = <p className={styles.sponsored}>SPONSORED</p>;
    }

    return (
        <div className={styles.tile} style={{backgroundImage: `url(`+backgroundImage+`)`}}>
          <h2 className={styles.title}><a href={seoLink}>{story.title}</a></h2>
          <p className={styles.category}>{story.category.entity.name}</p>
          {sponsored}
          <p className={styles.author}>Words by {story.author.name}</p>
          <time className={styles.date}><Moment format="MMM DD">{story.date}</Moment></time>
        </div>
    );
};

export default StoryMasonryTile;