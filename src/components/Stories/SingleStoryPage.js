import React, { Component } from 'react';
import Moment from 'react-moment';
import {Query} from "react-apollo";

import styles from './SingleStoryPage.module.scss';
import { StoryByIdQuery } from "./StoryQueries";
import Ad from "../Ads/Ad";

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
        if (loading) return "Loading...";
        if (error) return `Error! ${error.message}`;

        const story = data.nodeQuery.entities[0];

        let headshot;
        if (story.author.headshot !== null) {
          headshot = <img className={styles.headshot} src={story.author.headshot.url} alt={story.author.name + ' headshot'} />;
        }
        const fullName = story.author.first + ' ' + story.author.last;

        return (
            <div className={styles.wrapper}>
              <div className={styles.meta}>
                <h1 className={styles.title}>{story.title}</h1>
                {headshot}
                <span className={styles.authorName}>Words by {fullName}</span>
                <span className={styles.category}>{story.category.entity.name}</span>
                <Moment className={styles.date} format="MMM DD">{story.date}</Moment>
              </div>
              <div className={styles.bodyWrapper}>
                <img className={styles.hero} src={story.wideImage.url} alt={'hero'} />
                <div className={styles.body} dangerouslySetInnerHTML={{__html: story.body.text}}/>
              </div>
              <Ad adUnit={'StoryDetailPage_Bottom'}/>
            </div>
        )
      }
      }
    </Query>
    )
  }
}

export default SingleStoryPage;