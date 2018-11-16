import React from 'react';
import './HomeFeedItem.css';

import Moment from 'react-moment';

const HomeFeedItem = (props) => {
    return (
        <div className="feed-item" style={{backgroundImage: `url(${props.thumbnailLink})`}}>
            <div className="feed-item__meta-container">
              <time className="feed-item__published-date"><Moment format="MMM DD">{props.publishedDate}</Moment></time>
                <h3 className="feed-item__name">{props.title}</h3>
            </div>
        </div>
    )
};


export default HomeFeedItem;