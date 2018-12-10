import React from "react";
import '../CSS/SpecialSeriesSet.css';

const SpecialSeriesHead = (props) => {
    const objStory = props.data.taxonomyTermQuery.entities[0];
    return(
        <div className="special-series-hero-banner">
            <div className="hero-banner-left">
                <div className="sponser-by">
                    <span>SPONSORED BY</span>
                    <p>MONSANTO
                        <img src={objStory.logo.url} alt={objStory.company} className="sponser-img" height="276"/>
                    </p>
                </div>
                <div className="artice-desc">
                    <span className="series-name">MONSANTO SPECIAL SERIES</span>
                    <h4 className="series-subject">{objStory.name}</h4>
                    <p>
                        In honor of the two-year anniversary of Monsanto’s commitment to make its operations carbon neutral by
                        2021, Monsanto presents a series on what it means to be “Climate Smart” in the world of agriculture. The
                        series will cover the role of climate change in impacting food security, agriculture, weather patterns
                        and society at large.
                        There is a strong connection between climate smart agriculture practices, water quality/availability,
                        biodiversity, food security and farming community livelihoods. Done right, climate smart farming can
                        conserve and protect these important resources as well.
                        Modern agriculture can be an important part of the climate change solution through practices that
                        improve soil health so that it can store more carbon. These include conservation tillage, cover crops,
                        digital tools and microbials, which can help farmers get better harvests while absorbing and storing
                        more carbon.
                    </p>
                </div>
            </div>
            <div className="hero-banner-right">
                <img src={objStory.mainImage.derivative.url}/>
            </div>
        </div>
    );
};
export default SpecialSeriesHead;

