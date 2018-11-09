import React from 'react';
import './PrimeStory.css';
import { Query } from "react-apollo";
import gql from 'graphql-tag';

const Stories = gql`
 query nodeQuery($offset: Int, $limit: Int) {
   entities {
     entityId
     entityBundle
     ... on NodeBestpractice {
       title
       fieldContent {
         processed
       }
     }
   }
 }
`;

const PrimeStory = () => (
<Query
  query={Stories}
  variables={{
    offset: 0,
    limit: 10
  }}
>
  {({ loading, error, data }) => {
    if (loading) return "Loading...";
    if (error) return `Error! ${error.message}`;

    const storyStyle = {
        backgroundImage: `url(${data.props.featured_image__tall})`
    };

    return (
      <div className={data.props.storyClass} style={storyStyle}>
          <div className="story-card--content">
          <h3 className="story-title">{data.props.title}</h3>
          <p className="story-author">Words by {data.props.author_name}</p>
          <p className="story-category">{data.props.category_name}</p>
          <time className="story-publish-date"e>{data.props.date}</time>
          </div>
      </div>
    );
  }}
</Query>
);


export default PrimeStory;
