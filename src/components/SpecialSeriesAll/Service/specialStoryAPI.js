import React from 'react';
import { Query } from "react-apollo";
import gql from 'graphql-tag';

const GetAllSpecialStories = (props) => {

const Stories = gql`
 query storyQuery {
   primeStories {
    results {
      title
      author: entityOwner {
        first: fieldFirstName
        last: fieldLastName
      } 
      fieldFeaturedImageTall {
        targetId
        alt
        title
        width
        height
        url
      }
      fieldFeaturedImageWide {
        targetId
        alt
        title
        width
        height
        url
      }
      category: fieldPrimaryCategory {
        targetId
        ... on FieldNodeFieldPrimaryCategory {
          term: entity {
            name
          }
        }
      }
      date: created
    }
  }
 }
`;
    return (
        <Query query={Stories} variables={{}} />
    )
};

export default GetAllSpecialStories;