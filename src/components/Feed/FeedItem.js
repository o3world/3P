import React from 'react';
import Moment from 'react-moment';

import styles from './FeedItem.module.scss';

const FeedItem = (props) => {

  const feedThumbnail = (props.image) ? <img className={styles.thumbnail} src={props.image} alt={''}/> : '';

  const thumbnailClass = (props.image) ? styles.hasThumb : styles.noThumb;

  let company;
  if (props.company) {
    company = props.company[0];
  }

  return (
    <div className={thumbnailClass}>
      {feedThumbnail}
      <div className={styles.meta}>
        <h2 className={styles.title}><a href={props.link}>{props.title}</a></h2>
        <div className={styles.description} dangerouslySetInnerHTML={ {__html: props.body.slice(0,200)} } />
        <span className={styles.company} dangerouslySetInnerHTML={ {__html: company}} />
        <span className={styles.category}>{props.category}</span>
        <time className={styles.date}><Moment format="MMM DD">{props.date}</Moment></time>
      </div>
    </div>
  )
};

export default FeedItem;