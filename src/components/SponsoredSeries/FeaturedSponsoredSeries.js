import React from "react";

const FeaturedSponsoredSeries = (props) => {
    let series = props.data.taxonomyTermQuery.entities[0];
    series =  (series !== undefined)? series: {"mainImage": {"derivative":{"url":""}}, "company": "", "logo":{"url":""}, "name": ""};
    return (
        <div>
            <img src={series.mainImage.derivative.url} alt={''}/>
            <div>
                <div>
                    <p>{series.company}</p>
                    <img src={series.logo.url} alt={series.company} />
                </div>
                <div>
                    <div>
                        <h3>{series.company}</h3>
                        <h2>{series.name}</h2> {/* @TODO Need to make this a link when we have single series route. */}
                    </div>
                    <button>Explore Series</button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedSponsoredSeries;