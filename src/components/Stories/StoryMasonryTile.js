import React from "react";
import LazyLoad from 'react-lazyload';
import {Link} from "react-router-dom";

import Moment from 'react-moment';
import styles from './StoryMasonryTile.module.scss';

const StoryMasonryTile = (props) => {
  const story = {...props.data};
  const link = '/story/' + new Date(story.date.value * 1000).getFullYear() + story.entityUrl.path + '/' + story.id + '/';


  let sponsored;
  if (story.sponsoredBy && props.context !== 'singleSeries') {
    sponsored = <p className={styles.sponsored}>SPONSORED</p>;
  }

  let category;
  if (story.category && !props.hideCategory) {
    category = <p className={styles.category} dangerouslySetInnerHTML={{__html: story.category.entity.name}} />;
  }

  const backgroundImage = story.tallImage ? story.tallImage.derivative.url : '';

  const author = story.author.first && story.author.last ? `${story.author.first} ${story.author.last}` : story.author.name;

  const dateFormat = new Date().getFullYear() === new Date(story.date.value * 1000).getFullYear() ? 'MMM DD' : 'MMM DD, YYYY';

  return (
    <LazyLoad height={200}>
      <Link to={link} className={styles.tileAnchor}>
        <div className={styles.tile}>
          <picture className={styles.backgroundImage}>
            {/* <source srcSet={backgroundImage + '.webp'} type="image/webp" /> */}
            <img src={backgroundImage} alt={''} />
          </picture>
          <h2 className={styles.title}><span dangerouslySetInnerHTML={{__html: story.title}}/></h2>
          {category}
          {sponsored}
          <p className={styles.author}>Words by {author}</p>
          <Moment className={styles.date} format={dateFormat}>{story.date.value * 1000}</Moment>
        </div>
      </Link>
    </LazyLoad>
  )
};

export default StoryMasonryTile;