import React from 'react';
import HomeFeedItem from './HomeFeedItem';
import './HomeTheFeed.css';
import { Query } from "react-apollo";
import gql from 'graphql-tag';
import ApolloClient from "apollo-boost";

const customClient = new ApolloClient({
  uri: "https://3blmedia.com/api/v1/feed"
});

const TheFeedQuery = gql`
 query feedQuery {
   results {
     title
     body
     type
     date
     id
     image
    }
  }
`;



const TheFeed = () =>
    <Query
        query={TheFeedQuery}
        client={customClient}
        variables={{}}
    >
        {({ loading, error, data }) => {
            if (loading) return "Loading...";
            if (error) return `Error! ${error.message}`;

            return (
                <div className="the-feed__container">
                  <div className={'the-feed__title-wrapper'}>
                    <h3 className={'the-feed__title'}>The Feed</h3>
                    <p className={'the-feed__title--subtitle'}>Latest News from Leaders in Corporate Social Responsibility</p>
                  </div>
                  <div className="the-feed">
                      {this.state.data.map(feeditem =>
                          <HomeFeedItem {...feeditem} key={feeditem.id}/>
                      )}
                  </div>
                </div>
            );
        }}
    </Query>

export default TheFeed;
