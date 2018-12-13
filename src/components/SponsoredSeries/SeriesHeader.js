import React from "react";
const SeriesHeader = (props) => {
    const objStory = props.data.taxonomyTermQuery.entities;
    return(
        <section>
            <div>
                <div>
                    <span>SPONSORED BY</span>
                    <img src={objStory.logo.url} alt={objStory.company}/>
                </div>
                <div>
                    <span>{objStory.company} SPECIAL SERIES</span>
                    <h1>{objStory.name}</h1>
                    <p>{objStory.text}</p>
                </div>
            </div>
            <div>
                <img src={objStory.mainImage.derivative.url}/>
            </div>
        </section>
    );
};
export default SeriesHeader;
