import React, { Component } from 'react';
import './PrimeStory.css';

class PrimeStory extends Component {
    render() {
        const storyStyle = {
            backgroundImage: `url(${this.props.featured_image__tall})`
        };
        return (
            <div className={this.props.storyClass} style={storyStyle}>
                <div className="story-card--content"><h3 className="story-title">{this.props.title}</h3>
                <p className="story-author">Words by {this.props.author_name}</p>
                <p className="story-category">{this.props.category_name}</p>
                <time className="story-publish-date"e>{this.props.date}</time>
                </div>
            </div>
        );
    }
};


export default PrimeStory;