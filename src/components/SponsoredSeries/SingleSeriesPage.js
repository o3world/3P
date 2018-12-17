import React, {Component, Fragment} from 'react';
import SeriesHeader from "./SeriesHeader";
import QueryHoc from "../Common/Query";
import * as SponsoredSeriesQuery from "../SponsoredSeries/SponsoredSeriesQueries";
import SeriesStoriesMasonryWrapper from "./SeriesStoriesMasonryWrapper";
import * as StoryQuery from "../Stories/StoryQueries";

class SingleSeriesPage extends Component {

    clickHandler = (e, id, title = "") => {
        this.props.history.push({pathname:"/story/"+id+"/"+title, state:{id: id} });
    };

    render() {
        const variables = {"id": this.props.match.params.id};
        return (
            <Fragment>
                <QueryHoc query={SponsoredSeriesQuery.SingleSeriesQuery} variables={variables} componentName={SeriesHeader} />
                {/* Stories Masonary Wrapper */}
                <QueryHoc query={StoryQuery.StoriesBySeriesId} variables={{}} componentName={SeriesStoriesMasonryWrapper} additional={{"click": (e, id, title)=>this.clickHandler(e, id, title)}} />
            </Fragment>
        )
    }
}
export default SingleSeriesPage;