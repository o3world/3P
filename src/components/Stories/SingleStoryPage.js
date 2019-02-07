import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'
import { Query } from "react-apollo"
import { Helmet } from "react-helmet"

import styles from './SingleStoryPage.module.scss'
import { StoryByIdQuery } from "./StoryQueries"
import Ad from "../Ads/Ad"

import StoryShare from './SocialShare/StoryShare'
import LoadingSpinner from "../Common/LoadingSpinner"
import Header from '../Header/Header'
import Footer from "../Footer/Footer"

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

        const currentURL = 'https://triplepundit.com' + this.props.location.pathname;
        /* @TODO: Replace hard-coded domain */

        let wideImage;
        let wideImageURL;
        let imageHeight;
        let imageWidth;
        if (story.wideImage) {
          wideImage =
              <div className={styles.imageWrapper}>
                <img className={styles.hero} src={story.wideImage.url} alt={'hero'} />
                <StoryShare url={currentURL}/>
              </div>;
          wideImageURL = story.wideImage.url;
          imageHeight = story.wideImage.height;
          imageWidth = story.wideImage.width;
        }

        const authorName = (story.author.first && story.author.last) ? `${story.author.first} ${story.author.last}` : story.author.name;

        let authorLink = `/author/${authorName.replace(/\s+/g, '-').toLowerCase()}/${story.author.authorID}`;
        if (story.author.isEditor) {
          authorLink = `/editor/${story.author.authorID}/${authorName.replace(/\s+/g, '-').toLowerCase()}`;
        }

        return (
            <div className={styles.wrapper}>
            <Helmet>
              <title>TriplePundit: {story.title}</title>
              <meta property="og:title" content={'TriplePundit: ' + story.title} />
              <meta property="og:image" content={wideImageURL} />
              <meta property="og:image:height" content={imageHeight} />
              <meta property="og:image:width" content={imageWidth} />
              <meta property="og:url" content={currentURL} />
              <meta name="twitter:card" content="summary" />
              <meta name="twitter:site" content="@triplepundit" />
            </Helmet>
            <Header />
            <div className={styles.meta}>
              <h1 className={styles.title}>{story.title}</h1>
              {headshot}
              <span className={styles.authorName}><Link to={authorLink}>Words by {authorName}</Link></span>
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
