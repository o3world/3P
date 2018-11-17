import React, { Component } from 'react';
import HomeFeedItem from './HomeFeedItem';
import './HomeTheFeed.css';

class HomeTheFeed extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    fetch('https://3blmedia.com/api/v1/feed')
        .then(response => response.json())
        .then(data => this.setState({ data: data.results }));
  }

  render() {

        return (
            <div className="the-feed__container">
              <div className={'the-feed__title-wrapper'}>
                <h3 className={'the-feed__title'}>The Feed</h3>
                <p className={'the-feed__title--subtitle'}>Latest News from Leaders in Corporate Social Responsibility</p>
              </div>
              <div className="the-feed">
                  {this.state.data.map(feeditem =>
                      <HomeFeedItem {...feeditem} key={feeditem.id}/>
                  )}
              </div>
            </div>
        );
    }
  }

export default HomeTheFeed;
