import React from 'react';
import ShareIconList from './ShareIconList';
import styles from './StoryShare.module.scss';

const StoryShare = (props) =>
  <div className={styles.container}>
    <ShareIconList {...props}/>
  </div>;

export default StoryShare;
