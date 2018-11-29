import React from 'react';
import PrimeStory from '../PrimeStories/PrimeStory';
import PrimeStoryHero from '../PrimeStories/PrimeStoryHero';
import './PrimestoryPage.css';
import { Query } from "react-apollo";
import gql from 'graphql-tag';

import prime_logo from '../../assets/images/prime_circle.svg';

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



const PrimeStoryPage = () =>
  <Query
    query={Stories}
    variables={{}}
  >
    {({ loading, error, data }) => {
      if (loading) return "Loading...";
      if (error) return `Error! ${error.message}`;
      const stories = data.primeStories.results;

      return (
        <div className={'home__prime-stories'}>
          <div className="prime-stories-page">
            <PrimeStoryHero {...stories[0]} key={0} index={0} storyClass={'prime-story-hero'} />

            <div className={'prime-stories__head'}>
              <img src={prime_logo} alt={'prime_logo'} />
              <h3 className={'prime-stories__title'}>Prime Stories</h3>
              <h4 className={'prime-stories__title--subtitle'}>Editor Curated</h4>
            </div>
            <PrimeStory {...stories[1]} key={1} index={1} storyClass={'prime-story prime-story--second'} />
            <PrimeStory {...stories[2]} key={2} index={2} storyClass={'prime-story'} />
            <PrimeStory {...stories[3]} key={3} index={3} storyClass={'prime-story'} />
            <PrimeStory {...stories[4]} key={4} index={4} storyClass={'prime-story'} />
            <PrimeStory {...stories[5]} key={5} index={5} storyClass={'prime-story'} />
            <PrimeStory {...stories[5]} key={5} index={5} storyClass={'prime-story'} />
            <div class="ad"></div>
            <div class="pss">
                <div className="story-card--content">
                    <h3 className="story-title">demo title</h3>
                    <p className="story-author">Words by Demo Demo</p>
                    <p className="story-category">environment</p>
                </div>
            </div>
            <div class="pss-content">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
              It has survived not only five centuries, but also the leap into electronic typesetting, 
              remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
              sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
              Aldus PageMaker including versions of Lorem Ipsum.
               Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
              It has survived not only five centuries, but also the leap into electronic typesetting, 
              remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
              sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
              Aldus PageMaker including versions of Lorem Ipsum.
              </div>
          </div>
          </div>
        
        
        );
    }}
  </Query>

export default PrimeStoryPage;