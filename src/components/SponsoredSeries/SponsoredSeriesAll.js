import React from 'react';
import FeaturedSponsoredSeries from "./FeaturedSponsoredSeries";
import SponsoredSeriesAllMasonryWrapper from "./SponsoredSeriesAllMasonryWrapper";

import styles from './SponsoredSeriesAll.module.scss';

const SponsoredSeriesAll = () => {

  return (
      <div className={styles.pageWrapper}>
        <FeaturedSponsoredSeries/>
        <div className={styles.header}>
          <div className={styles.titleWrapper}>
            <h1 className={styles.title}>Sponsored Series</h1>
            <span
                className={styles.subtitle}>Sponsored Series Collections</span>
          </div>
          <div className={styles.contact}>
            <p>Interested in advancing conversations on key sustainability
              topics? Contact <a href={'mailto:jfoley@3blmedia.com'}>Jennifer
                Foley</a> for sponsoring a special series.</p>
          </div>
        </div>
        <SponsoredSeriesAllMasonryWrapper/>
      </div>
  );
};

export default SponsoredSeriesAll;