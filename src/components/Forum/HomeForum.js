import React from 'react';
import styles from "./HomeForum.module.scss";

import forum_background from '../../assets/images/forum_stock.png';

const HomeForum = () => {
  const homeForumStyle = {
    backgroundImage: `url(${forum_background})`
  };
    return (
      <a target='_blank' rel="noopener noreferrer" href='http://www.3blforum.com/' className={styles.wrapper} style={homeForumStyle}>
        <div className={styles.meta}>
          <div className={styles.tag}>3BL Forum</div>
          <h3 className={styles.title}>Join the Event that Matters</h3>
        </div>
      </a>
    )
};

export default HomeForum;
