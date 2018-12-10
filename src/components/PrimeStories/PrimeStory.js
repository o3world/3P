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
        const storyClass = (this.props.index === '1') ? styles.primeStorySecond : styles.primeStory;
        return (
            <div className={storyClass} style={storyStyle}>
                <div className={styles.content}>
                    <h3 className={styles.title}>{this.props.title}</h3>
                    <p className={styles.author}>Words by {this.props.author.first} {this.props.author.last}</p>
                    <p className={styles.category}>{this.props.category.entity.name}</p>
                    <time className={styles.date}><Moment format="MMM DD">{published_date}</Moment></time>
                </div>
            </div>
        );
    }
}

export default PrimeStory;