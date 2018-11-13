import React, { Component } from 'react';
import './PrimeStoryHero.css';
import Moment from "react-moment";

class PrimeStoryHero extends Component {
    render() {
        const storyStyle = {
            backgroundImage: `url(${this.props.fieldFeaturedImageWide.url})`
        };
      const published_date = new Date(this.props.date * 1000);
        return (
            <div className={this.props.storyClass}>
                <img src={this.props.fieldFeaturedImageWide.url} style={storyStyle} alt={'add alt'} className="prime-story-hero__image"/>
                <div className="hero-meta">
                    <h3 className="prime-story__name">{this.props.title}</h3>
                    <p className="author">Words by {this.props.author.first} {this.props.author.last}</p>
                    <time><Moment format="MMM DD">{published_date}</Moment></time>
                </div>
            </div>
        );
    }
};


export default PrimeStoryHero;