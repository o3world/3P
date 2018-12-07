import React, { Component } from 'react';
import styles from './PrimeStory.module.scss';

import Moment from 'react-moment';

class PrimeStory extends Component {
    render() {
        const storyStyle = {
            "--tall-bg-image": `url(${this.props.tallImage.url})`,
            "--wide-bg-image": `url(${this.props.wideImage.url})`
        };
        const published_date = new Date(this.props.date * 1000);
        return (
            <div className={styles.primeStory} style={storyStyle}>
                <div className={styles.storyCard__content}>
                    <h3 className={styles.storyTitle}>{this.props.title}</h3>
                    <p className={styles.storyAuthor}>Words by {this.props.author.first} {this.props.author.last}</p>
                    <p className={styles.storyCategory}>{this.props.category.entity.name}</p>
                    <time className={styles.storyPublishDate}><Moment format="MMM DD">{published_date}</Moment></time>
                </div>
            </div>
        );
    }
};


export default PrimeStory;