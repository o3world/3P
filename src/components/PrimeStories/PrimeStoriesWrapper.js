import React from 'react';

import PrimeStory from '../PrimeStories/PrimeStory';
import PrimeStoryHero from '../PrimeStories/PrimeStoryHero';
import styles from './PrimeStoriesWrapper.module.scss';
import { Query } from "react-apollo";
import gql from 'graphql-tag';

import prime_logo from '../../assets/images/prime_circle.svg';
import LoadingSpinner from "../Common/LoadingSpinner";

const Stories = gql`
query storyQuery {
  nodeQuery(
    filter: {
      conditions: [
        {field: "type", value: "story"},
        {field: "status", value: "1"},
        {field: "field_prime_position", value: "0", operator: GREATER_THAN}
      ]
    },
    sort: {field: "field_prime_position", direction: ASC}
  )
  {
    entities {
			... on NodeStory {
			  id: nid
        title
        author: entityOwner {
          first: fieldFirstName
          last: fieldLastName
          headshot: userPicture { url }
        }
        date: created
        entityUrl {
          path
        }
        category: fieldPrimaryCategory { entity { name } }
        body: fieldContent {
          processed
        }
      tallImage: fieldFeaturedImageTall {
        targetId
        alt
        title
        width
        height
        url
      }
      wideImage: fieldFeaturedImageWide {
        targetId
        alt
        title
        width
        height
        url
      }
      }
    }
  }
}
`;

const PrimeStoriesWrapper = () =>
    <Query
        query={Stories}
        variables={{}}
    >
        {({ loading, error, data }) => {
            if (loading) return <LoadingSpinner/>;
            if (error) return `Error! ${error.message}`;
            const stories = data.nodeQuery.entities;

            return (
        <div className={styles.wrapper}>
            <PrimeStoryHero {...stories[0]} key={0} index={'0'}/>

          <div className={styles.heading}>
            <img src={prime_logo} alt={'prime_logo'} />
            <h3 className={styles.title}>Prime Stories</h3>
            <h4 className={styles.subtitle}>Editor Curated</h4>
          </div>
            <PrimeStory {...stories[1]} key={1} index={'1'}/>
            <PrimeStory {...stories[2]} key={2} index={'2'}/>
            <PrimeStory {...stories[3]} key={3} index={'3'}/>
            <PrimeStory {...stories[4]} key={4} index={'4'}/>
            <PrimeStory {...stories[5]} key={5} index={'5'}/>
        </div>
            );
        }}
    </Query>;

export default PrimeStoriesWrapper;
