import React, { Component } from 'react';
import FeedItem from '../Feed/FeedItem';
import './TheFeed.css';

class TheFeed extends Component {
    constructor(props) {
        super(props)
        this.state = require('./feed.json')[0].newsList;
    }
    render() {
        return (
            <div className="the-feed__container">
                <h3>The Feed</h3>
                <div className="the-feed">
                    {this.state.map(feeditem =>
                        <FeedItem {...feeditem} key={feeditem.id}/>
                    )}
                </div>
            </div>
        )
    }
}

export default TheFeed;