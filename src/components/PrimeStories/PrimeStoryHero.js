import React, { Component } from 'react';
import './PrimeStoryHero.css';

class PrimeStoryHero extends Component {
    render() {
        const storyStyle = {
            backgroundImage: `url(${this.props.fieldFeaturedImageWide.url})`
        };
        return (
            <div className={this.props.storyClass}>
                <img src={this.props.fieldFeaturedImageWide.url} style={storyStyle} alt={'add alt'} className="prime-story-hero__image"/>
                <div className="hero-meta">
                    <h3 className="prime-story__name">{this.props.title}</h3>
                    <p className="author">Words by {this.props.author_name}</p>
                    <time>{this.props.date}</time>
                </div>
            </div>
        );
    }
};


export default PrimeStoryHero;