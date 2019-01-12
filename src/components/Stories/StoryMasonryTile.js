import React from "react";
import LazyLoad from 'react-lazyload';

import Moment from 'react-moment';
import styles from './StoryMasonryTile.module.scss';

const StoryMasonryTile = (props) => {
  const story = {...props.data};
  const link = '/story/' + new Date(story.date).getFullYear() + story.entityUrl.path + '/' + story.id + '/';

  let backgroundImage = "";
    if(story.tallImage) {
      backgroundImage =  story.tallImage.url
    }

  let sponsored;
  if (story.sponsoredBy) {
    sponsored = <p className={styles.sponsored}>SPONSORED</p>;
  }

  let category;
  if (story.category) {
    category = <p className={styles.category} dangerouslySetInnerHTML={{__html: story.category.entity.name}} />;
  }

  let author = story.author.name;
  if (story.author.firstName && story.author.lastName) {
    author = story.author.firstName + ' ' + story.author.lastName;
  }

  return (
    <LazyLoad height={200}>
      <div className={styles.tile}
           style={{backgroundImage: `url(` + backgroundImage + `)`}}>
        <h2 className={styles.title}><a href={link}>{story.title}</a></h2>
        {category}
        {sponsored}
        <p className={styles.author}>Words by {author}</p>
        <Moment className={styles.date} format="MMM DD">{story.date}</Moment>
      </div>
    </LazyLoad>
  )
};

export default StoryMasonryTile;