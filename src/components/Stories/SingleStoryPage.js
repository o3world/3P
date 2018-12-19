import React, { Component } from 'react';
import Moment from 'react-moment';
import {Query} from "react-apollo";

import styles from  './SingleStory.module.css';
import { StoryByIdQuery } from "./StoryQueries";

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
        return (
            <div className={styles.wrapper}>
              <img className={'story-hero'} src={story.wideImage.url} alt={story.wideImage.alt} />
              <div className={'story-meta-container'}>
                <h1 className={'story-title'}>{story.title}</h1>
                <img className={'story-author-headshot'} src={story.author.headshot.url} alt={story.author.headshot.alt} />
                <span className={'story-author'}>Words by {story.author.first + " " + story.author.last}</span>
                <span className={'story-category'}>{story.category.entity.name}</span>
                <time className={'story-date'}><Moment
                    format="MMMM DD, YYYY">{story.date * 1000}</Moment>
                </time>
              </div>
              <div className={'story-body'} dangerouslySetInnerHTML={{__html: story.body.processed}}></div>
            </div>
        )
      }
      }
    </Query>
    )
  }
}

export default SingleStoryPage;