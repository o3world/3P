import React from 'react';
import News from './Components/News';
import FeedInformation from './Service/Feed';
import NewsWithoutImage from './Components/NewsWithoutImage';
import "./CSS/News.css";

class FeedPageContainer extends React.Component {

    constructor() {
        super();

        this.state = {
            newsWithImage: []
        }
    }

    componentDidMount = () => {
        fetch('https://3blmedia.com/api/v1/feed')
            .then(
                response => response.json()
            )
            .then((data) => {
                let news = data.results.filter(obj => {
                    let fileName = obj.image;
                    let extention = fileName.substr(fileName.lastIndexOf('.') + 1);

                    if (extention === 'png') {
                        return obj;
                    }
                })

                this.setState({
                    newsWithImage: [...news]
                })

            });
    }



    render() {
        return (
            <React.Fragment>
                <div className="page-title">
                    <h3 className="main-title">The Feed</h3>
                    <span className="title-info">Latest News from Leaders in Corporate Social Responsibility</span>
                </div>
                {/* { FeedInformation.feeds.map((feed) => (feed.image) ? <News data={feed} /> : <NewsWithoutImage data={feed} />
                )} */}

                {
                    this.state.newsWithImage.length !== 0 ?
                        this.state.newsWithImage.map((news) => {
                            return <News data={news} />
                        }) : null
                }
            </React.Fragment>
        )
    }

}

export default FeedPageContainer;