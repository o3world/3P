import React from 'react';
import HomeEditors from "./HomeEditors";
import HomeForum from "./HomeForum";
import HomeAssoc from "./HomeAssoc";
import HomeMultimedia from "./HomeMultimedia";
import HomeBTS from "./HomeBTS";
import HomePrimeStories from "./HomePrimeStories";
import HomeTheFeed from "./HomeTheFeed";
import "./Home.css";

const Home = () => {
    return (
        <div className={'home-content'}>
            <HomePrimeStories/>
            <HomeTheFeed/>
          <div className={'bts_podcast_wrapper'}>
            <HomeBTS/>
            <HomeMultimedia/>
          </div>
          <div className={'home_events-wrapper'}>
            <HomeAssoc/>
            <HomeForum/>
          </div>
            <HomeEditors/>
        </div>
    )
};

export default Home;