import React from "react";
import image from './images/poona-gadgil-black.png';
import './featuredSponser.css';

const FeaturedSponser = (props) => {
    return (
        <div className="special-serises-content-main">
            <img src="https://www.planwallpaper.com/static/images/0382763769f46da4ff3c6644eeac648c_large_iXL6SyF.jpeg" />
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