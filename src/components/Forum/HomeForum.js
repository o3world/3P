import React from 'react';
import styles from "./HomeForum.module.scss";

import forum_background from '../../assets/images/forum_stock.png';

const HomeForum = () => {
  const homeForumStyle = {
    backgroundImage: `url(${forum_background})`
  };
    return (
        <div className={styles.wrapper} style={homeForumStyle}>
          <div className={styles.meta}>
            <div className={styles.tag}>3BL Forum</div>
            <h3 className={styles.title}>Join the Event that Matters</h3>
          </div>
        </div>
    )
};

export default HomeForum;