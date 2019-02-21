import React from 'react'
import PrimeStoriesWrapper from '../PrimeStories/PrimeStoriesWrapper'
import StoriesMasonryWrapper from "./StoriesMasonryWrapper"
import Ad from "../Ads/Ad"
import PageTemplate from '../Common/PageTemplate'

import { Helmet } from "react-helmet"

const currentURL = 'https://triplepundit.com/stories';

const StoriesPage = () =>

  <PageTemplate>
  <Helmet>
    <meta name="parsely-title" content={'Stories'} />
    <meta name="parsely-link" content={currentURL} />
    <meta name="parsely-type" content="page" />
  </Helmet>
    <PrimeStoriesWrapper/>
    <Ad adUnit={'StoriesPage_AboveMosaic'}/>
    <StoriesMasonryWrapper/>
  </PageTemplate>;

export default StoriesPage;
