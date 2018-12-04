import React, {Component, Fragment} from 'react';
import image from './images/poona-gadgil-black.png';
import './SpecialSeries.css';

class SpecialSeries extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <Fragment>
                <div className="special-serises-content-main">
                    <div className="prime-story-hero">
                        <div className="featured-sponser-box">
                            <div className="blank"></div>
                            <div className="blank2"></div>
                            <div className="sponser-left">
                                <h5 className="sponser-title">FEATURED SPONSER</h5>
                                <span className="sponser-name">MONSANTO
                        <img src={image} alt="sponser" className="sponser-img" />
                    </span>
                            </div>
                            <div className="sponser-right">
                                <div className="article-desc">
                                    <div className="artical-title">
                                        <h6>MONSANTO SPECIAL SERIES</h6>
                                        <p>CLIMATE SMART AGRICULTURE</p>
                                    </div>
                                    <div className="artical-sub">
                                        <h4>Shop Local? Why Healthy Soil Matters</h4>
                                    </div>

                                </div>
                                <div className="explore-series-box">
                                    <a href="#" className="explore-series-btn">EXPLORE SERIES</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="special-series-titles">
                    <div className="page-title">
                        <h3 className="main-title">The Feed</h3>
                        <span className="title-info">SPONSORED STORY COLLECTIONS</span>
                    </div>
                    <div className="info-series">
                        <p>Interested in advancing conversations on key sustainability topics?
                            Contact <span>Jennifer Foley</span> for sponsoring a special series.</p>
                    </div>
                </div>
                <div className="article-main-boxs">
                    <div className="article-box article-01">
                        <a href="#" className="article-inner-box">
                            <div className="title-article">
                                <h4>Responsible Forestry</h4>
                            </div>
                            <div className="publication-name"></div>
                        </a>
                    </div>
                    <div className="article-box article-02">
                        <a href="#" className="article-inner-box">
                            <div className="title-article">
                                <h4>Maximizing Impact Through Workforce Development and Education</h4>
                            </div>
                            <div className="publication-name"></div>
                        </a>
                    </div>
                    <div className="article-box article-01">
                        <a href="#" className="article-inner-box">
                            <div className="title-article">
                                <h4>Responsible Forestry</h4>
                            </div>
                            <div className="publication-name"></div>
                        </a>
                    </div>
                    <div className="article-box article-02">
                        <a href="#" className="article-inner-box">
                            <div className="title-article">
                                <h4>Maximizing Impact Through Workforce Development and Education</h4>
                            </div>
                            <div className="publication-name"></div>
                        </a>
                    </div>
                    <div className="article-box article-02">
                        <a href="#" className="article-inner-box">
                            <div className="title-article">
                                <h4>Maximizing Impact Through Workforce Development and Education</h4>
                            </div>
                            <div className="publication-name"></div>
                        </a>
                    </div>
                    <div className="article-box article-01">
                        <a href="#" className="article-inner-box">
                            <div className="title-article">
                                <h4>Responsible Forestry</h4>
                            </div>
                            <div className="publication-name"></div>
                        </a>
                    </div>
                    <div className="article-box article-02">
                        <a href="#" className="article-inner-box">
                            <div className="title-article">
                                <h4>Maximizing Impact Through Workforce Development and Education</h4>
                            </div>
                            <div className="publication-name"></div>
                        </a>
                    </div>
                    <div className="article-box article-01">
                        <a href="#" className="article-inner-box">
                            <div className="title-article">
                                <h4>Responsible Forestry</h4>
                            </div>
                            <div className="publication-name"></div>
                        </a>
                    </div>
                </div>
            </Fragment>
        )
    }
}
export default SpecialSeries;
