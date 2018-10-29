import React from 'react';
import PrimeStory from '../PrimeStories/PrimeStory';
import PrimeStoryHero from '../PrimeStories/PrimeStoryHero';
import './HomePrimeStories.css';

const data = require('../PrimeStories/prime-stories.json').data.posts;

const HomePrimeStories = () =>
    <div className={'home__prime-stories'}>
        <div className="prime-stories">
            <PrimeStoryHero {...data[0]} key={0} index={0} storyClass={'prime-story-hero'}/>
            <h2 className="prime-stories__heading">Prime Stories</h2>
            <PrimeStory {...data[1]} key={1} index={1} storyClass={'prime-story prime-story--wide'}/>
            <PrimeStory {...data[2]} key={2} index={2} storyClass={'prime-story prime-story--tall'}/>
            <PrimeStory {...data[3]} key={3} index={3} storyClass={'prime-story prime-story--tall'}/>
            <PrimeStory {...data[4]} key={4} index={4} storyClass={'prime-story prime-story--tall'}/>
            <PrimeStory {...data[5]} key={5} index={5} storyClass={'prime-story prime-story--tall'}/>
        </div>
    </div>;

export default HomePrimeStories;