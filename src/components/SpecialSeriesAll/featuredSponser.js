import React from "react";
import image from './images/poona-gadgil-black.png';
import './featuredSponser.css';
import images from "./images/renewable-hydrogen-US-Army.jpg";

const FeaturedSponser = (props) => {
    return (
        <div className="special-serises-content-main">
            <img src={images} />
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
    )
}

export default FeaturedSponser;