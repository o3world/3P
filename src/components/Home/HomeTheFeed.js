import React, { Component } from 'react';
import HomeFeedItem from './HomeFeedItem';
import './HomeTheFeed.css';

class HomeTheFeed extends Component {
    constructor(props) {
        super(props)
        this.state = require('../Feed/feed.json')[0].newsList;
    }
    render() {
        return (
            <div className="the-feed__container">
                <h3>The Feed</h3>
                <div className="the-feed">
                    {this.state.map(feeditem =>
                        <HomeFeedItem {...feeditem} key={feeditem.id}/>
                    )}
                </div>
            </div>
        )
    }
}

export default HomeTheFeed;