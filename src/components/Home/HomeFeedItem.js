import React from 'react';
import './HomeFeedItem.css';

import Moment from 'react-moment';

const HomeFeedItem = (props) => {
    const {thumbnailLink, publishedDate, title} = props;
    return (
        <div className="feed-item" style={{backgroundImage: `url(${thumbnailLink})`}}>
            <div className="feed-item__meta-container">
              <time className="feed-item__published-date"><Moment format="MMM DD">{publishedDate}</Moment></time>
                <h3 className="feed-item__name">{title}</h3>
            </div>
        </div>
    )
};


export default HomeFeedItem;