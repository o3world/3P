import React, { Component } from 'react';
import HomeFeedItem from './HomeFeedItem';
import styles from './HomeTheFeed.module.scss';


class HomeTheFeed extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    fetch('https://www.3blmedia.com/feeds/fmr/csrwire')
      .then(response => response.json())
      .then(data => this.setState({ data: data.data.results.slice(0,4) }))
      .catch((error) => console.log("Home Feed fetch error: " + error))
  }

  render() {

    return (
      <div className={styles.container}>
        <div className={styles.titleWrapper}>
          <h3 className={styles.title}>The Feed</h3>
          <p className={styles.subtitle}>Latest News from Leaders in Corporate Social Responsibility</p>
        </div>
        <div className={styles.feed}>
          {this.state.data.map(feeditem =>
            <HomeFeedItem {...feeditem} key={feeditem.id} />
          )}
        </div>
      </div>
    );
  }
}

export default HomeTheFeed;
