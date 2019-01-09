import React from 'react';
import PrimeStoriesWrapper from '../PrimeStories/PrimeStoriesWrapper';
import StoriesMasonryWrapper from "./StoriesMasonryWrapper";
import Ad from "../Ads/Ad";

const StoriesPage = () =>

    <div>
        <PrimeStoriesWrapper/>
      <Ad adUnit={'StoriesPage_AboveMosaic'}/>
        <StoriesMasonryWrapper/>
    </div>;

export default StoriesPage;