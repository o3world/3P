import React, { Component } from 'react';
import HomeFeedItem from './HomeFeedItem';
import './HomeTheFeed.css';
import { RestLink } from 'apollo-link-rest';

import { Query } from "react-apollo";
import gql from 'graphql-tag';

// setup your `RestLink` with your endpoint
const restLink = new RestLink({ uri: "https://3blmedia.com/3bl_widgets_json_data?t=ZGY3ZjI4YWM4OWNhMzdiZjFhYmQyZjZjMTg0ZmUxY2Y=&p=list" });

// setup your client
const restClient = new ApolloClient({
  link: restLink,
  cache: new InMemoryCache(),
});

const Feed = gql`
 query @rest(offset: $offset, limit: $limit) {
   newsList {
     companyName
     companyLink
     id
     title
     type
     publishedDate
     shortTeaser
     description
     }
   }
`;

const HomeTheFeed = () =>
<Query
    restClient.query={Feed}
    variables={{
        offset: 0,
        limit: 10
    }}
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
                    {this.state.map(feeditem =>
                        <HomeFeedItem {...feeditem} key={feeditem.id}/>
                    )}
                </div>
            </div>
        );
    }}
</Query>

export default HomeTheFeed;
