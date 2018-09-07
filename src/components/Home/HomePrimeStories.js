import React from 'react';
import PrimeStory from '../PrimeStories/PrimeStory';
import './HomePrimeStories.css';

const data = require('../PrimeStories/prime-stories.json').data.posts;

const HomePrimeStories = () =>
    <div>
        <h3>Prime Stories</h3>
        <div className="prime-stories">
        {data.map((post, index) =>
            <PrimeStory {...post} key={post.id} index={index}/>
        )}
        </div>
    </div>;

export default HomePrimeStories;