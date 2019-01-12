import React from 'react';
import './HomeFeedItem.css';

import Moment from 'react-moment';

const HomeFeedItem = (props) => {
  const timeFromNowDuring = 2 * 24 * 60 * 60 * 60 * 1000; // 2 days of milliseconds

  return (
      <div className="feed-item" style={{backgroundImage: `url(${props.image})`}}>
          <div className="feed-item__meta-container">
            <Moment className="feed-item__published-date" format={'MMM DD'} fromNowDuring={timeFromNowDuring}>{props.date}</Moment>
              <h3 className="feed-item__name">{props.title}</h3>
          </div>
      </div>
  )
};

export default HomeFeedItem;