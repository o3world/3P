import React, { Component } from 'react';
import FeaturedSponsoredSeries from "./FeaturedSponsoredSeries";
import SponsoredSeriesAllMasonryWrapper from "./SponsoredSeriesAllMasonryWrapper";
import QueryHoc from "../Common/Query";
import * as SponsoredSeriesQueries from "./SponsoredSeriesQueries";

class SponsoredSeriesAll extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    render() {
        return (
            <div>
                <QueryHoc query={SponsoredSeriesQueries.FeaturedSponsoredSeriesQuery} variables={{}} componentName={FeaturedSponsoredSeries} />
              <div>
                <div>
                  <h3>Sponsored Series</h3>
                  <span>Sponsored Story Collections</span>
                </div>
                <div>
                  <p>Interested in advancing conversations on key sustainability topics? Contact <a href={'mailto:jfoley@3blmedia.com'}>Jennifer Foley</a> for sponsoring a special series.</p>
                </div>
              </div>
                <QueryHoc query={SponsoredSeriesQueries.AllSponsoredSeriesQuery} variables={{}} componentName={SponsoredSeriesAllMasonryWrapper} />
            </div>
        )
    }
}

export default SponsoredSeriesAll;
