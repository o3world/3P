import React from "react";
const SeriesHeader = (props) => {
    console.log("--->", props);
    const objStory = props.data.taxonomyTermById;
    const logo = (objStory.logo !== null) ? objStory.logo.url : "";
    return (
        <section>
            <div>
                <div>
                    <span>SPONSORED BY</span>
                    <img src={logo} alt={objStory.company}/>
                </div>
                <div>
                    <span>{objStory.company} SPECIAL SERIES</span>
                    <h1>{objStory.name}</h1>
                    <p>{objStory.description.processed}</p>
                </div>
            </div>
            <div>
                <img src={objStory.mainImage.derivative.url} alt={''}/>
            </div>
        </section>
    );
};
export default SeriesHeader;
