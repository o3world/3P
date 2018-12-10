import React from 'react';
import EditorCardsWrapper from "../Editors/EditorCardsWrapper";
import HomeForum from "../Forum/HomeForum";
import HomeAssoc from "../Association/HomeAssoc";
import HomeMultimedia from "./HomeMultimedia";
import HomeBTS from "../BTS/HomeBTS";
import HomePrimeStories from "../PrimeStories/HomePrimeStories";
import HomeTheFeed from "../Feed/HomeTheFeed";
import styles from "./Home.module.scss";

const Home = () => {
    return (
        <div className={styles.wrapper}>
            <HomePrimeStories/>
            <HomeTheFeed/>
          <div className={styles.bts_podcastWrapper}>
            <HomeBTS/>
            <HomeMultimedia/>
          </div>
          <div className={styles.eventsWrapper}>
            <HomeAssoc/>
            <HomeForum/>
          </div>
            <EditorCardsWrapper/>
        </div>
    )
};

export default Home;