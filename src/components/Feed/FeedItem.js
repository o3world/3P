import React from 'react';
import Moment from 'react-moment';

const FeedItem = (props) => {

    const feedThumbnail = (props.image) ? <img src={props.image} alt={''}/> : '';

    const thumbnailClass = (props.image) ? ' has-thumbnail' : ' no-thumbnail';

    return (
      <div className={'feedItem' + thumbnailClass}>
        {feedThumbnail}
        <div>
          <h3><a href={props.link}>{props.title}</a></h3>
          <div>{props.category}</div>
          <time><Moment format="MMM DD">{props.date}</Moment></time>
          <p dangerouslySetInnerHTML={ {__html: props.body.slice(0,200)} } />
          <div dangerouslySetInnerHTML={ {__html: props.company[0]}} />
        </div>
      </div>
    )
};

export default FeedItem;