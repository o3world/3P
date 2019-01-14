import React from "react";

import styles from './SeriesHeader.module.scss';

const SeriesHeader = (props) => {
    const series = props.series;

    let logo;
    if (series.logo !== null) {
      logo = <img className={styles.companyLogo} src={series.logo.url} alt={series.company}/>;
    }

    let heroStyle;
    if (series.mainImage) {
      heroStyle = {backgroundImage: `url(${series.mainImage.derivative.url})`};
    }

    return (
        <section className={styles.wrapper}>
          <div className={styles.logoWrapper}>
            <span className={styles.sponsoredByTag}>Sponsored by</span>
            {logo}
          </div>
          <div className={styles.descriptionWrapper}>
              <p className={styles.sponsoredTag}>{series.company} SPECIAL SERIES</p>
              <h1 className={styles.title}>{series.name}</h1>
              <p className={styles.description} dangerouslySetInnerHTML={{__html: series.description.processed}}/>
          </div>
          <div className={styles.heroImage} style={heroStyle}/>
        </section>
    );
};

export default SeriesHeader;
