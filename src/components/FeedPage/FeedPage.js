import React from 'react';
import NewsComponent from './NewsComponent';
import VideoComponent from './VideoComponent';
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
                <NewsComponent img={0} />
                <MidNews />
                <NewsComponent img={1} />
                <VideoComponent />
                <NewsComponent img={2} />
                <NewsComponent img={3} />
                <NewsComponent img={4} />
            </React.Fragment>
        )
    }

}

export default FeedPage;