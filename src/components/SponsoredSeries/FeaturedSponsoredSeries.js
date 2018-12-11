import React from "react";

const FeaturedSponsoredSeries = (props) => {
    let objStory = props.data.taxonomyTermQuery.entities[0];
    objStory =  (objStory != undefined)? objStory: {"mainImage": "", "company": "", "logo":{"url":""}, "name": ""};
    return (
        <div>
            <img src={objStory.mainImage} alt={''}/>
            <div>
                <div>
                    <p>{objStory.company}</p>
                    <img src={objStory.logo.url} alt={objStory.company} />
                </div>
                <div>
                    <div>
                        <h3>{objStory.company}</h3>
                        <h2><a href="#">{objStory.name}</a></h2>
                    </div>
                    <button>Explore Series</button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedSponsoredSeries;