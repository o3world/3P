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
            <HomeBTS/>
            <HomeMultimedia/>
            <HomeAssoc/>
            <HomeForum/>
            <HomeEditors/>
        </div>
    )
};

export default Home;