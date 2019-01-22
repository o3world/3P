import React from 'react';
import PrimeStoriesWrapper from '../PrimeStories/PrimeStoriesWrapper';
import StoriesMasonryWrapper from "./StoriesMasonryWrapper";
import Ad from "../Ads/Ad";
import Header from '../Header/Header';

const StoriesPage = () =>

    <div>
        <Header />
        <PrimeStoriesWrapper/>
      <Ad adUnit={'StoriesPage_AboveMosaic'}/>
        <StoriesMasonryWrapper/>
    </div>;

export default StoriesPage;