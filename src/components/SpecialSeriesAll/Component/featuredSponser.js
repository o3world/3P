import React from "react";
import '../CSS/featuredSponser.css';
import {FeaturedSpecialStoriesQuery} from "../Service/SpecialStoryQuery";
import { Query } from "react-apollo";

const FeaturedSponser = (props) => {
    const objStory = props.data.taxonomyTermQuery.entities[0];
    return (
        <div className="special-serises-content-main">
            <img src={objStory.mainImage.derivative.url}/>
            <div className="featured-sponser-box">
                <div className="blank"></div>
                <div className="blank2"></div>
                <div className="sponser-left">
                    <h5 className="sponser-title">FEATURED SPONSER</h5>
                    <span className="sponser-name">{objStory.company}
                        <img src={objStory.logo.url} alt={objStory.company} className="sponser-img" />
                    </span>
                </div>
                <div className="sponser-right">
                    <div className="article-desc">
                        <div className="artical-title">
                            <h6>{objStory.company} SPECIAL SERIES</h6>
                        </div>
                        <div className="artical-sub">
                            <h4>{objStory.name}</h4>
                        </div>
                    </div>
                    <div className="explore-series-box">
                        <a href="#" className="explore-series-btn">EXPLORE SERIES</a>
                    </div>
                </div>
            </div>
        </div>);
}
export default FeaturedSponser;