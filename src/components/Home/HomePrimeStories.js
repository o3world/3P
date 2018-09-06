import React from 'react';
import PrimeStory from './PrimeStory';
import './PrimeStories.css';

const data = require('./prime-stories.json').data.posts;

const PrimeStories = () =>
    <div>
        <h3>Prime Stories</h3>
        <div className="prime-stories">
        {data.map((post, index) =>
            <PrimeStory {...post} key={post.id} index={index}/>
        )}
        </div>
    </div>;

export default PrimeStories;