import React from 'react';
import './FeedItem.css';

const FeedItem = (props) => {
    const {thumbnailLink, publishedDate, title} = props;
    return (
        <div className="feed-item" style={{backgroundImage: `url(${thumbnailLink})`}}>
            <time className="feed-item__published-date">{publishedDate}</time>
            <h3 className="feed-item__name">{title}</h3>
        </div>
    )
};


export default FeedItem;