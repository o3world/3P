import React, { Component } from 'react'
import FeedItem from './FeedItem'
import Ad from "../Ads/Ad"

import styles from './TheFeedPage.module.scss'
import LoadingSpinner from "../Common/LoadingSpinner"

import PageTemplate from '../Common/PageTemplate'

class TheFeedPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            loading: true
        }
    }

    componentDidMount = () => {
      fetch('https://www.3blmedia.com/feeds/fmr/csrwire')
          .then(response => response.json())
          .then(data => this.setState({ data: data.data.results, loading: false }));
    };


    render(){
        const { loading } = this.state;
        if (loading) return (
              <LoadingSpinner/>
        );

        return (
            <PageTemplate>
              <Ad adUnit={'TheFeedPage_Top'}/>
              <div className={styles.titleWrapper}>
                  <h3 className={styles.pageTitle}>The Feed</h3>
                  <span className={styles.pageSubtitle}>Latest News from Leaders in Corporate Social Responsibility</span>
              </div>

              { this.state.data.map(feeditem =>
                  <FeedItem {...feeditem} key={feeditem.id} />
              )}
            </PageTemplate>
        )
    }

}

export default TheFeedPage;
