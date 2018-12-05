import React from 'react';

const NewsComponent = (props) => {
    let objFeed = props.data;
    return(
        <div className="the-feed-main-box">
            <div className="feed-inner-box">
                <div className="feed-left-img">
                    <img src={objFeed.image} style={{"height":"226px"}}/>
                </div>
                <div className="feed-right-content">
                    <ul>
                        <li className="text-left">
                            {objFeed.category}
                        </li>
                        <li className="text-right">
                            {objFeed.date}
                        </li>
                    </ul>
                    <div className="feed-right-title-box">
                        <h4 className="feed-right-title">{objFeed.title}</h4>
                        <p>{objFeed.description}</p>
                    </div>
                    <div className="feed-author-box">
                        <p  className="author-name">{objFeed.author}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsComponent;