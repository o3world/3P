import React from 'react';
import PrimeStory from '../PrimeStories/PrimeStory';
import PrimeStoryHero from '../PrimeStories/PrimeStoryHero';
import './HomePrimeStories.css';
import { Query } from "react-apollo";
import gql from 'graphql-tag';

import prime_logo from '../../assets/images/prime_circle.svg';

const data = require('../PrimeStories/prime-stories.json').data.posts;

const Stories = gql`
 query storyQuery($offset: Int, $limit: Int) {
   nodeQuery(offset: $offset, limit: $limit, filter: {conditions: [{field: "type", value: "story"}]}) {
   entities {
     entityId
     entityBundle
     ... on NodeStory {
       title
       fieldFeaturedImageWide {
        targetId
        alt
        title
        width
        height
        url
      }
      fieldFeaturedImageTall {
        targetId
        alt
        title
        width
        height
        url
      } 
     }
   }
  }
 }
`;



const HomePrimeStories = () =>
    <Query
        query={Stories}
        variables={{
            offset: 0,
            limit: 10
        }}
    >
        {({ loading, error, data }) => {
            if (loading) return "Loading...";
            if (error) return `Error! ${error.message}`;
            //console.log(data);
            const stories = data.nodeQuery.entities;
            console.log(stories);

            return (
    <div className={'home__prime-stories'}>
        <div className="prime-stories">
            <PrimeStoryHero {...stories[0]} key={0} index={0} storyClass={'prime-story-hero'}/>

          <div className={'prime-stories__heading'}>
            <img src={prime_logo} alt={'prime_logo'} />
            <h3 className={'prime-stories__title'}>Prime Stories</h3>
            <h4 className={'prime-stories__title--subtitle'}>Editor Curated</h4>
          </div>
            <PrimeStory {...stories[1]} key={1} index={1} storyClass={'prime-story prime-story--wide'}/>
            <PrimeStory {...stories[2]} key={2} index={2} storyClass={'prime-story prime-story--tall'}/>
            <PrimeStory {...stories[3]} key={3} index={3} storyClass={'prime-story prime-story--tall'}/>
            <PrimeStory {...stories[4]} key={4} index={4} storyClass={'prime-story prime-story--tall'}/>
            <PrimeStory {...stories[5]} key={5} index={5} storyClass={'prime-story prime-story--tall'}/>
        </div>
    </div>);
        }}
    </Query>

export default HomePrimeStories;