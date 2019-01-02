import React from 'react';

import PrimeStoriesWrapper from "../PrimeStories/PrimeStoriesWrapper";
import HomeTheFeed from "../Feed/HomeTheFeed";
import HomeForum from "../Forum/HomeForum";
import HomeAssoc from "../Association/HomeAssoc";
import HomeMultimedia from "./HomeMultimedia";
import HomeBTS from "../BTS/HomeBTS";
import DefaultBannerAd from "../Ads/DefaultBannerAd";
import EditorCardsWrapper from "../Editors/EditorCardsWrapper";
import styles from "./Home.module.scss";

const Home = () => {
    return (
        <div className={styles.wrapper}>
          <div>
            <DefaultBannerAd/>
          </div>
            <PrimeStoriesWrapper/>
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
