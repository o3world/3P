import React from 'react';
import './FeedItem.css';

const FeedItem = (props) => {
    const {thumbnailLink, publishedDate, title} = props;
    return (
        <div className="feed-item" style={{backgroundImage: `url(${thumbnailLink})`}}>
            <div className="feed-item__meta-container">
                <time className="feed-item__published-date">Funky {publishedDate}</time>
                <h3 className="feed-item__name">Brent {title}</h3>
            </div>
        </div>
    )
};

export default FeedItem;