import React, { Component } from 'react';
import FeedItem from './FeedItem';

import styles from './TheFeedPage.module.scss';

class TheFeedPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
        }
    }

    componentDidMount = () => {
      fetch('https://3blmedia.com/api/v1/feed')
          .then(response => response.json())
          .then(data => this.setState({ data: data.results }));
    };

    render() {
        return (
            <div className={styles.pageWrapper}>
                <div className={styles.titleWrapper}>
                    <h3 className={styles.pageTitle}>The Feed</h3>
                    <span className={styles.pageSubtitle}>Latest News from Leaders in Corporate Social Responsibility</span>
                </div>

              { this.state.data.map(feeditem =>
                  <FeedItem {...feeditem} key={feeditem.id} />
              )}
            </div>
        )
    }

}

export default TheFeedPage;