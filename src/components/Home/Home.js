import React from 'react';
import EditorCardsWrapper from "../Editors/EditorCardsWrapper";
import HomeForum from "../Forum/HomeForum";
import HomeAssoc from "../Association/HomeAssoc";
import HomeMultimedia from "./HomeMultimedia";
import HomeBTS from "../BTS/HomeBTS";
import PrimeStoriesWrapper from "../PrimeStories/PrimeStoriesWrapper";
import HomeTheFeed from "../Feed/HomeTheFeed";
import styles from "./Home.module.scss";
import * as EditorQueries from "../Editors/EditorsQueries";
import QueryHoc from "../Common/Query";

const Home = () => {

    const limit = 3;
    return (
        <div className={styles.wrapper}>
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
            <QueryHoc query={EditorQueries.Editors} variables={{limit}} componentName={EditorCardsWrapper} />
        </div>
    )
};

export default Home;