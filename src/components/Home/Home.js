import React from 'react';

import PrimeStoriesWrapper from "../PrimeStories/PrimeStoriesWrapper";
import HomeTheFeed from "../Feed/HomeTheFeed";
import HomeForum from "../Forum/HomeForum";
import HomeAssoc from "../Association/HomeAssoc";
import HomeVideo from "./HomeVideo";
import HomeBTS from "../BTS/HomeBTS";
import Ad from "../Ads/Ad";
import EditorCardsWrapper from "../Editors/EditorCardsWrapper";
import styles from "./Home.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div className={styles.wrapper}>
          <PrimeStoriesWrapper/>
          <div className={styles.arrow}>
            <Link to={'/stories'}><FontAwesomeIcon icon={"arrow-right"} /></Link>
          </div>
          <HomeTheFeed/>
          <div className={styles.arrow}>
            <Link to={'/the-feed'}><FontAwesomeIcon icon={"arrow-right"} /></Link>
          </div>
          <Ad adUnit={'Homepage_AfterTheFeed'}/>
          <div className={styles.bts_podcastWrapper}>
            <HomeBTS/>
            <HomeVideo/>
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
