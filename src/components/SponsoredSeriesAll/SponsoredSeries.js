import React, {Component, Fragment} from 'react';
import './SponsoredSeries.css';

import FeaturedSponser from "./featuredSponser";
import StoryPageTile from "./StoryPageTitle";
import Story from "./Story";

class SponsoredSeries extends Component {
    render() {
        return (
            <Fragment>
                <FeaturedSponser />
                <StoryPageTile />
                <div className="article-main-boxs">
                    <Story bgImage="article-box article-01" title="Responsible Forestry"/>
                    <Story bgImage="article-box article-02" title="Maximizing Impact Through Workforce Development and Education"/>
                    <Story bgImage="article-box article-01" title="Responsible Forestry"/>
                    <Story bgImage="article-box article-02" title="Maximizing Impact Through Workforce Development and Education"/>
                    <Story bgImage="article-box article-01" title="Responsible Forestry"/>
                    <Story bgImage="article-box article-02" title="Maximizing Impact Through Workforce Development and Education"/>
                    <Story bgImage="article-box article-01" title="Responsible Forestry"/>
                    <Story bgImage="article-box article-02" title="Maximizing Impact Through Workforce Development and Education"/>
                    <Story bgImage="article-box article-01" title="Responsible Forestry"/>
                    <Story bgImage="article-box article-02" title="Maximizing Impact Through Workforce Development and Education"/>
                    <Story bgImage="article-box article-01" title="Responsible Forestry"/>
                    <Story bgImage="article-box article-02" title="Maximizing Impact Through Workforce Development and Education"/>
                </div>
            </Fragment>
        )
    }
}
export default SponsoredSeries;
