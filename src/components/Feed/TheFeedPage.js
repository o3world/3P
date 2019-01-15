import React, { Component } from 'react';
import FeedItem from './FeedItem';
import Ad from "../Ads/Ad";

import styles from './TheFeedPage.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class TheFeedPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            loading: true
        }
    }

    componentDidMount = () => {
      fetch('https://3blmedia.com/feeds/fmr/csrwire')
          .then(response => response.json())
          .then(data => this.setState({ data: data.data.results }));
          setTimeout(() => this.setState({ loading: false }), 1500);
    };


    render(){
        const { loading } = this.state;
        if (loading) return (
              <div className={styles.spinner}>
                <p>Loading the feed</p>
                <FontAwesomeIcon icon="spinner" spin/>
              </div>
            );
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
