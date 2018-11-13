import React, { Component } from 'react';
import './PrimeStory.css';

import Moment from 'react-moment';

class PrimeStory extends Component {
    render() {
        const storyStyle = {
            backgroundImage: `url(${this.props.fieldFeaturedImageTall.url})`
        };
        const published_date = new Date(this.props.date * 1000);
        return (
            <div className={this.props.storyClass} style={storyStyle}>
                <div className="story-card--content">
                    <h3 className="story-title">{this.props.title}</h3>
                    <p className="story-author">Words by {this.props.author.first} {this.props.author.last}</p>
                    <p className="story-category">{this.props.category.term.name}</p>
                    <time className="story-publish-date"><Moment format="MMM DD">{published_date}</Moment></time>
                </div>
            </div>
        );
    }
};


export default PrimeStory;