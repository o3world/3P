import React from 'react';
import News from './Components/News';
import FeedInformation from './Service/Feed';
import NewsWithoutImage from './Components/NewsWithoutImage';
import "./CSS/News.css";

class FeedPageContainer extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div className="page-title">
                    <h3 className="main-title">The Feed</h3>
                    <span className="title-info">Latest News from Leaders in Corporate Social Responsibility</span>
                </div>
                { FeedInformation.feeds.map((feed) => (feed.image) ? <News data={feed} /> : <NewsWithoutImage data={feed} />
                )}
            </React.Fragment>
        )
    }

}

export default FeedPageContainer;