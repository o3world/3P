import React, { Component } from 'react';
import styles from './PrimeStoryHero.module.scss';
import Moment from "react-moment";

class PrimeStoryHero extends Component {
    render() {
        const heroImageStyle = {
            "--tall-bg-image": `url(${this.props.tallImage.url})`,
            "--wide-bg-image": `url(${this.props.wideImage.url})`
        };
      const published_date = new Date(this.props.date * 1000);
        return (
            <div className={styles.wrapper} style={heroImageStyle}>
                <div className={styles.meta}>
                    <h3 className={styles.name}>{this.props.title}</h3>
                    <p className={styles.author}>Words by {this.props.author.first} {this.props.author.last}</p>
                    <time className={styles.date}><Moment format="MMM DD">{published_date}</Moment></time>
                </div>
            </div>
        );
    }
}

export default PrimeStoryHero;