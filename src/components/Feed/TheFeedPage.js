import React, { Component } from 'react';
import FeedItem from './FeedItem';
import Ad from "../Ads/Ad";

import styles from './TheFeedPage.module.scss';

class TheFeedPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
        }
    }

    componentDidMount = () => {
      fetch('https://3blmedia.com/feeds/fmr/csrwire')
          .then(response => response.json())
          .then(data => this.setState({ data: data.data.results }));
    };

    render() {
        return (
            <div className={styles.pageWrapper}>
              <Ad adUnit={'TheFeedPage_Top'}/>
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