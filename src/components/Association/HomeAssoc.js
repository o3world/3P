import React from 'react';
import styles from "./HomeAssoc.module.scss";

import assoc_background from '../../assets/images/assoc_stock.png';

const HomeAssoc = () => {
  const homeAssocStyle = {
    backgroundImage: `url(${assoc_background})`
  };
    return (
        <div className={styles.wrapper} style={homeAssocStyle}>
          <div className={styles.meta}>
            <div className={styles.tag}>3BL Association</div>
            <h3 className={styles.title}>Bringing Leaders Together</h3>
          </div>
        </div>
    )
};

export default HomeAssoc;