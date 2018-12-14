import React, {Component, Fragment} from 'react';
import SeriesHeader from "./SeriesHeader";
import QueryHoc from "../Common/Query";
import * as SponseredSeries from "../SponsoredSeries/SponsoredSeriesQueries";

class SingleSeriesPage extends Component {

    constructor(props) {
        super(props);
    }
    render() {
        console.log(this.props);

        const variables = {"id": this.props.match.params.id};
        return (
            <Fragment>
                <QueryHoc query={SponseredSeries.SingleSeriesQuery} variables={variables} componentName={SeriesHeader} />
                {/* Stories Masonary Wrapper */}

            </Fragment>
        )
    }
}
export default SingleSeriesPage;