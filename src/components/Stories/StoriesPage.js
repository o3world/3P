import React from 'react'
import PrimeStoriesWrapper from '../PrimeStories/PrimeStoriesWrapper'
import StoriesMasonryWrapper from "./StoriesMasonryWrapper"
import Ad from "../Ads/Ad"
import PageTemplate from '../Common/PageTemplate'

const StoriesPage = () =>
  <PageTemplate>
    <PrimeStoriesWrapper/>
    <Ad adUnit={'StoriesPage_AboveMosaic'}/>
    <StoriesMasonryWrapper/>
  </PageTemplate>;

export default StoriesPage;