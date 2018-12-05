import React from 'react';
import NewsComponent from './NewsComponent';
import FeedInformation from './Service/Feed';
import MidNews from './MidNews';
import "./News.css";

class FeedPage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="page-title">
                    <h3 className="main-title">The Feed</h3>
                    <span className="title-info">Latest News from Leaders in Corporate Social Responsibility</span>
                </div>
                { FeedInformation.feeds.map((feed) => (feed.image) ? <NewsComponent data={feed} /> : <MidNews data={feed} />
                )}
            </React.Fragment>
        )
    }

}

export default FeedPage;