import React, { Component } from 'react';
import FeaturedSponsoredSeries from "./FeaturedSponsoredSeries";
import SponsoredSeriesAllMasonryWrapper from "./SponsoredSeriesAllMasonryWrapper";
import QueryHoc from "../Common/Query";
import * as SponsoredSeriesQueries from "./SponsoredSeriesQueries";
//import

import styles from './SponsoredSeriesAll.module.scss';

class SponsoredSeriesAll extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }
    render() {
        return (
            <div className={styles.pageWrapper}>
                <QueryHoc query={SponsoredSeriesQueries.FeaturedSponsoredSeriesQuery} variables={{}} componentName={FeaturedSponsoredSeries} />
              <div className={styles.header}>
                <div className={styles.titleWrapper}>
                  <h1 className={styles.title}>Sponsored Series</h1>
                  <span className={styles.subtitle}>Sponsored Series Collections</span>
                </div>
                <div className={styles.contact}>
                  <p>Interested in advancing conversations on key sustainability topics? Contact <a href={'mailto:jfoley@3blmedia.com'}>Jennifer Foley</a> for sponsoring a special series.</p>
                </div>
              </div>
                <QueryHoc query={SponsoredSeriesQueries.AllSponsoredSeriesQuery} variables={{}} componentName={SponsoredSeriesAllMasonryWrapper} />
            </div>
        )
    }
}

export default SponsoredSeriesAll;
