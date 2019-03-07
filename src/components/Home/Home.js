import React from 'react'

import PrimeStoriesWrapper from "../PrimeStories/PrimeStoriesWrapper"
import HomeTheFeed from "../Feed/HomeTheFeed"
import HomeForum from "../Forum/HomeForum"
import HomeAssoc from "../Association/HomeAssoc"
import HomeVideo from "./HomeVideo"
import HomeBTS from "../BTS/HomeBTS"
import Ad from "../Ads/Ad"
import EditorCardsWrapper from "../Editors/EditorCardsWrapper"
import styles from "./Home.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link} from "react-router-dom"
import PageTemplate from '../Common/PageTemplate'
import { Helmet } from "react-helmet"

const currentURL = 'https://triplepundit.com';

const Home = () =>
    <PageTemplate>
      <Helmet>
        <meta name="parsely-title" content={'Home'} />
        <meta name="parsely-link" content={currentURL} />
        <meta name="parsely-type" content="frontpage" />
      </Helmet>
      <PrimeStoriesWrapper/>
      <div className={styles.arrow}>
        <Link to={'/stories'}>Stories <FontAwesomeIcon icon={"arrow-right"} /></Link>
      </div>
      <HomeTheFeed/>
      <div className={styles.arrow}>
        <Link to={'/the-feed'}>Feed <FontAwesomeIcon icon={"arrow-right"} /></Link>
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
    </PageTemplate>;

export default Home;
