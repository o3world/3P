import React, { Component } from 'react';
import PrimeStoryHeroStyles from './PrimeStoryHero.module.scss';
import Moment from "react-moment";

class PrimeStoryHero extends Component {
    render() {
        const heroImageStyle = {
            "--tall-bg-image": `url(${this.props.tallImage.url})`,
            "--wide-bg-image": `url(${this.props.wideImage.url})`
        };
      const published_date = new Date(this.props.date * 1000);
        return (
            <div className={PrimeStoryHeroStyles.primeStoryHero} style={heroImageStyle}>
                <div className={PrimeStoryHeroStyles.heroMeta}>
                    <h3 className={PrimeStoryHeroStyles.primeStory__name}>{this.props.title}</h3>
                    <p className={PrimeStoryHeroStyles.author}>Words by {this.props.author.first} {this.props.author.last}</p>
                    <time><Moment format="MMM DD">{published_date}</Moment></time>
                </div>
            </div>
        );
    }
}


export default PrimeStoryHero;