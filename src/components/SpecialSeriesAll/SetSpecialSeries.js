import React, {Component, Fragment} from 'react';
import SpecialSeriesHead from "./Component/SpecialSeries";
import SetStory from "./Component/SetStory";
import QueryHoc from "../Common/Query";
import * as SpecialStory from "../SponsoredSeries/SponsoredSeriesQueries";
import FeaturedSponsoredSeries from "../SponsoredSeries/FeaturedSponsoredSeries"

class SetSpecialSeries extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
    }
    render() {
        const variables = {}
        return (
            <Fragment>
                <QueryHoc query={SpecialStory.FeaturedSponsoredSeriesQuery} variables={variables} componentName={FeaturedSponsoredSeries} />
                <div className="article-main-boxs">
                    <QueryHoc query={SpecialStory.AllSponsoredSeriesQuery} variables={variables} componentName={SetStory} />
                </div>
            </Fragment>
        )
    }
}
export default SetSpecialSeries;
