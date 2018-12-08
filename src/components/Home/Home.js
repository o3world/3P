import React from 'react';
import HomeEditors from "../Editors/HomeEditors";
import HomeForum from "../Forum/HomeForum";
import HomeAssoc from "../Association/HomeAssoc";
import HomeMultimedia from "./HomeMultimedia";
import HomeBTS from "../BTS/HomeBTS";
import HomePrimeStories from "../PrimeStories/HomePrimeStories";
import HomeTheFeed from "../Feed/HomeTheFeed";
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