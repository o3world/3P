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

  let teaser = (props.teaser) ? props.teaser : props.body;
  const teaserLength = 450;
  if (teaser.length > teaserLength) {
    teaser = teaser.substr(0, teaserLength);
    teaser = teaser.substr(0, teaser.lastIndexOf(' ')) + ' &hellip;';
  }

  let category;
  if (props.category) {
    category = props.category;
  }

  return (
    <div className={thumbnailClass}>
      {feedThumbnail}
      <div className={styles.meta}>
        <h2 className={styles.title}><a target='_blank' rel="noopener noreferrer" href={props.link}>{props.title}</a></h2>
        <div className={styles.description} dangerouslySetInnerHTML={{__html: teaser}}/>
        <span className={styles.company} dangerouslySetInnerHTML={ {__html: company}} />

        <span className={styles.category}>{category}</span>
        <Moment className={styles.date} format="MMM DD">{props.date}</Moment>
      </div>
    </div>
  )
};

export default FeedItem;
