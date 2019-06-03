import React from 'react';

import styles from './HomeFeedItem.module.scss';

import Moment from 'react-moment';

const HomeFeedItem = (props) => {
  const timeFromNowDuring = 2 * 24 * 60 * 60 * 60 * 1000; // 2 days of milliseconds

  return (
      <div className={props.image ? styles.item : styles.itemNoImage} style={{backgroundImage: props.image ? `url(${props.image})` : "none"}}>
          <div className={styles.metaContainer}>
            <Moment className={styles.date} format={'MMM DD'} fromNowDuring={timeFromNowDuring}>{props.date}</Moment>
              <h3 className={styles.title}><a target='_blank' rel="noopener noreferrer" href={props.link}>{props.title}</a></h3>
          </div>
      </div>
  )
};

export default HomeFeedItem;
