import React from 'react';
import ShareIconList from './ShareIconList';
import styles from './StoryShare.module.scss';

const StoryShare = (props) =>
  <div className={styles.container}>
    <ShareIconList url={props.url}/>
  </div>;

export default StoryShare;
