import React, {Component, Fragment} from 'react';
import './CSS/SpecialSeries.css';
import FeaturedSponser from "./Component/featuredSponser";
import StoryPageTile from "./Component/StoryPageTitle";
import Story from "./Component/Story";
import QueryHoc from "../Common/Query";
import * as SpecialStory from "./Service/SpecialStoryQuery";

class SpecialSeries extends Component {

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
                <QueryHoc query={SpecialStory.FeaturedSpecialStoriesQuery} variables={variables} componentName={FeaturedSponser} />
                <StoryPageTile />
                <div className="article-main-boxs">
                    <QueryHoc query={SpecialStory.AllSpecialStoriesQuery} variables={variables} componentName={Story} />
                </div>
            </Fragment>
        )
    }
}
export default SpecialSeries;
