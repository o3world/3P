import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'
import { Query } from "react-apollo"
import { Helmet } from "react-helmet"

import styles from './SingleStoryPage.module.scss'
import { StoryByIdQuery } from "./StoryQueries"
import Ad from "../Ads/Ad"

import StoryShare from './SocialShare/StoryShare';
import LoadingSpinner from "../Common/LoadingSpinner";
import PageTemplate from "../Common/PageTemplate";
import SingleStoryBio from './SingleStoryBio'
import RelatedStoriesByCategory from './RelatedStoriesByCategory';

class SingleStoryPage extends Component {
  constructor(props) {
    super(props);

    this.state = { storyId: props.match.params.id };
  }

  componentWillReceiveProps(props) {
    this.setState({ storyId: props.match.params.id})
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
        let catCleanName;
        if (story.category) {
          catCleanName = story.category.entity.name.replace(/&/g, ' ').replace(/\s+/g, '-').toLowerCase();
          category = <div className={styles.category}><Link to={`/category/${catCleanName}/${story.category.entity.categoryID}`}>{story.category.entity.name}</Link></div>;
        }
        if (story.sponsoredSeries) {
          category =
              <div className={styles.category}>
                <h4 className={styles.sponsoredBy}>{story.sponsoredSeries.entity.sponsoredBy} Sponsored Series</h4>
                <h5 className={styles.seriesTitle}><Link to={story.sponsoredSeries.entity.entityUrl.path}>{story.sponsoredSeries.entity.seriesTitle}</Link></h5>
              </div>;
        }

        let headshot;
        if (story.author.headshot) {
          headshot = <img className={styles.headshot} src={story.author.headshot.url} alt={story.author.name + ' headshot'} />;
        }

        const currentURL = 'https://www.triplepundit.com' + this.props.location.pathname;
        /* @TODO: Replace hard-coded domain */

        let seo_title = story.title;
        if (story.seo_title) {
          seo_title = story.seo_title;
        }

        let wideImage;
        let wideImageURL;
        let imageHeight;
        let imageWidth;
        if (story.wideImage) {
          wideImage =
              <div className={styles.imageWrapper}>
                <picture>
                  {/* <source srcSet={story.wideImage.derivative.url + '.webp'} type="image/webp" /> */}
                  <img className={styles.hero} src={story.wideImage.derivative.url} alt={'hero'} />
                </picture>
              </div>;
          wideImageURL = story.wideImage.derivative.url;
          imageHeight = story.wideImage.derivative.height;
          imageWidth = story.wideImage.derivative.width;
        }

        const authorName = (story.author.first && story.author.last) ? `${story.author.first} ${story.author.last}` : story.author.name;

        let authorLink = `/author/${authorName.replace(/\s+/g, '-').toLowerCase()}/${story.author.authorID}`;
        if (story.author.isEditor) {
          authorLink = `/editor/${story.author.authorID}/${authorName.replace(/\s+/g, '-').toLowerCase()}`;
        }

        const authorBio = {
          headshot: story.author.headshot,
          name: authorName,
          link: authorLink,
          copy: story.author.bio ? story.author.bio.processed : '',
          linkedin: story.author.linkedin,
          email: story.author.email,
          twitter: story.author.twitter,
          instagram: story.author.instagram,
        };

        const relatedStories = {
          storyId: story.id,
          categoryId: story.category ? story.category.entity.categoryID : '',
          categoryName: story.category ? story.category.entity.name : '',
        };

        let seo_description = story.seo_description;
        if (!seo_description) {
          let bodyNoHtml = story.body.text.replace(/<(.|\n)*?>/g, '');
          let descriptionMaxLength = 200;
          seo_description = bodyNoHtml.substr(0, bodyNoHtml.lastIndexOf(' ', descriptionMaxLength));
        }

        const shareData = {
          title: story.title,
          description: seo_description,
          url: currentURL,
        }

        return (
          <Fragment>
              <Ad adUnit={'StoryDetailPage_Top'}/>
            <PageTemplate>
              <Helmet>
                <title>{story.title}</title>
                <meta property="og:title" content={seo_title} />
                <meta property={'og:description'} content={seo_description} />
                <meta property="og:image" content={wideImageURL} />
                <meta property="og:image:height" content={imageHeight} />
                <meta property="og:image:width" content={imageWidth} />
                <meta property="og:url" content={currentURL} />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@triplepundit" />
                <meta name="parsely-title" content={story.title} />
                <meta name="parsely-image-url" content={wideImageURL} />
                <meta name="parsely-link" content={currentURL} />
                <meta name="parsely-section" content={catCleanName} />
                <meta name="parsely-type" content="post" />
                <meta name="parsely-author" content={authorName} />
                <meta name="parsely-pub-date" content={new Date(story.date.value * 1000).toISOString()} />
              </Helmet>
              <div className={styles.meta}>
                <h1 className={styles.title}>{story.title}</h1>
                {headshot}
                <span className={styles.authorName}><Link to={authorLink}>Words by {authorName}</Link></span>
                {category}
                <StoryShare {...shareData}/>
                <Moment className={styles.date} format="MMM DD, YYYY">{story.date.value * 1000}</Moment>
              </div>
              <div className={styles.bodyWrapper}>
                {wideImage}
                <div className={styles.body} dangerouslySetInnerHTML={{__html: story.body.value}}/>
                <SingleStoryBio {...authorBio} />
              </div>
              <RelatedStoriesByCategory {...relatedStories}/>
              <Ad adUnit={'StoryDetailPage_Bottom'}/>
            </PageTemplate>
            </Fragment>
        )
      }
      }
    </Query>
    )
  }
}

export default SingleStoryPage;
