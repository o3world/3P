import React from 'react';
import HomeEditors from "./HomeEditors";
import HomePrimeStories from "./HomePrimeStories";
import HomeTheFeed from "./HomeTheFeed";

const Home = () => {
    return (
        <div>
            <HomePrimeStories/>
            <HomeTheFeed/>
            <HomeEditors/>
        </div>
    )
};

export default Home;