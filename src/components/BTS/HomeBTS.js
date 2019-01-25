import React from 'react';
import styles from "./HomeBTS.module.scss";

import bts_background from '../../assets/images/bts_background.png';

const HomeBTS = () => {
  const homeBTSStyle = {
    backgroundImage: `url(${bts_background})`
  };
    return (
        <div className={styles.wrapper} style={homeBTSStyle}>
          <div className={styles.contentWrapper}>
            <div className={styles.dateWrapper}>
            <h4>Weekly Newsletter</h4>
              <time className={styles.date}>Jan 16</time>
            </div>
            <h3 className={styles.title}>For Consumers, CSR Is Now More Important Than Price</h3>
            <p className={styles.author}>Words by John Howell</p>
          </div>
          <a href={'http://www.3blforum.com/brands-taking-stands-newsletter/newsletter-sign-up'} className={styles.button} target={'_blank'}>Subscribe</a>
        </div>
    )
};

export default HomeBTS;