import React, {Component, Fragment} from 'react';
import './CSS/SpecialSeries.css';
import SpecialSeriesHead from "./Component/SpecialSeries";
import StoryPageTile from "./Component/StoryPageTitle";
import SetStory from "./Component/SetStory";
import QueryHoc from "../Common/Query";
import * as SpecialStory from "./Service/SpecialStoryQuery";

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
                <QueryHoc query={SpecialStory.FeaturedSpecialStoriesQuery} variables={variables} componentName={SpecialSeriesHead} />
                <div className="article-main-boxs">
                    <QueryHoc query={SpecialStory.AllSpecialStoriesQuery} variables={variables} componentName={SetStory} />
                </div>
            </Fragment>
        )
    }
}
export default SetSpecialSeries;
