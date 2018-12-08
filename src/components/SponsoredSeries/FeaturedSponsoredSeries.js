import React from "react";

const FeaturedSponsoredSeries = (props) => {
  console.log(props.data);
  const objStory = props.data.taxonomyTermQuery.entities[0];
  return (
      <div>
          <img src={objStory.mainImage.derivative.url} alt={''}/>
          <div>
              <div>
                  <h5>Featured Sponsor</h5>
                  <span>{objStory.company}
                      <img src={objStory.logo.url} alt={objStory.company} />
                  </span>
              </div>
              <div>
                  <div>
                      <div>
                          <h6>{objStory.company} SPECIAL SERIES</h6>
                      </div>
                      <div>
                          <h4>{objStory.name}</h4>
                      </div>
                  </div>
                  <div>
                      <button>Explore Series</button>
                  </div>
              </div>
          </div>
      </div>
  );
};

export default FeaturedSponsoredSeries;