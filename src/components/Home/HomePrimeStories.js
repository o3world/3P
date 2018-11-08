import React from 'react';
import PrimeStory from '../PrimeStories/PrimeStory';
import PrimeStoryHero from '../PrimeStories/PrimeStoryHero';
import './HomePrimeStories.css';

import prime_logo from '../../assets/images/prime_circle.svg';

const data = require('../PrimeStories/prime-stories.json').data.posts;

const HomePrimeStories = () =>
    <div className={'home__prime-stories'}>
        <div className="prime-stories">
            <PrimeStoryHero {...data[0]} key={0} index={0} storyClass={'prime-story-hero'}/>

          <div className={'prime-stories__heading'}>
            <img src={prime_logo} alt={'prime_logo'} />
            <h3 className={'prime-stories__title'}>Prime Stories</h3>
            <h4 className={'prime-stories__title--subtitle'}>Editor Curated</h4>
          </div>
            <PrimeStory {...data[1]} key={1} index={1} storyClass={'prime-story prime-story--second'}/>
            <PrimeStory {...data[2]} key={2} index={2} storyClass={'prime-story prime-story--tall'}/>
            <PrimeStory {...data[3]} key={3} index={3} storyClass={'prime-story prime-story--tall'}/>
            <PrimeStory {...data[4]} key={4} index={4} storyClass={'prime-story prime-story--tall'}/>
            <PrimeStory {...data[5]} key={5} index={5} storyClass={'prime-story prime-story--tall'}/>
        </div>
    </div>;

export default HomePrimeStories;