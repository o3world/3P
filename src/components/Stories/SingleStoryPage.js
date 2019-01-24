import React, { Component } from 'react';
import Moment from 'react-moment';
import {Query} from "react-apollo";

import styles from './SingleStoryPage.module.scss';
import { StoryByIdQuery } from "./StoryQueries";
import Ad from "../Ads/Ad";

import StoryShare from './SocialShare/StoryShare';
import LoadingSpinner from "../Common/LoadingSpinner";
import Header from '../Header/Header';
import Footer from "../Footer/Footer";

import { Helmet } from 'react-helmet';

class SingleStoryPage extends Component {
  constructor(props) {
    super(props);

    this.state = { storyId: props.match.params.id };
  }

  render() {

    return (
    <Query
        query={StoryByIdQuery}
        variables={{ "id" : this.state.storyId }}
    >
      {({loading, error, data}) => {
        if (loading) return <LoadingSpinner/>;
        if (error) return `Error! ${error.message}`;

        const story = data.nodeQuery.entities[0];

        let category;
        if (story.category) {
          category = <div className={styles.category}>{story.category.entity.name}</div>;
        }
        if (story.sponsoredSeries) {
          category =
              <div className={styles.category}>
                <h4 className={styles.sponsoredBy}>{story.sponsoredSeries.entity.sponsoredBy} Sponsored Series</h4>
                <h5 className={styles.seriesTitle}><a href={story.sponsoredSeries.entity.entityUrl.path}>{story.sponsoredSeries.entity.seriesTitle}</a></h5>
              </div>;
        }

        let headshot;
        if (story.author.headshot) {
          headshot = <img className={styles.headshot} src={story.author.headshot.url} alt={story.author.name + ' headshot'} />;
        }

        let wideImage;
        let wideImageURL;
        if (story.wideImage) {
          wideImage =
              <div className={styles.imageWrapper}>
                <img className={styles.hero} src={story.wideImage.url} alt={'hero'} />
                <StoryShare/>
              </div>;
          wideImageURL = story.wideImage.url;
        }

        const fullName = story.author.first + ' ' + story.author.last;

        const currentURL = this.props.location.pathname;

        return (
            <div className={styles.wrapper}>
            <Helmet>
              <title>{story.title}</title>
              <meta name="og:title" content={story.title} />
              <meta name="og:title" content={story.title} />
              <meta property="og:image" content={wideImageURL} />
              <meta property="og:url" content={currentURL} />
            </Helmet>
              <Header />
              <div className={styles.meta}>
                <h1 className={styles.title}>{story.title}</h1>
                {headshot}
                <span className={styles.authorName}>Words by {fullName}</span>
                {category}
                <Moment className={styles.date} format="MMM DD, YYYY">{story.date}</Moment>
              </div>
              <div className={styles.bodyWrapper}>
                {wideImage}
                <div className={styles.body} dangerouslySetInnerHTML={{__html: story.body.text}}/>
              </div>
              <Ad adUnit={'StoryDetailPage_Bottom'}/>
              <Footer />
            </div>
        )
      }
      }
    </Query>
    )
  }
}

export default SingleStoryPage;
