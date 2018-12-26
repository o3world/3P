import React from 'react';
import NewsLetterService from './NewsLetterService';

class NewsletterSignup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    /* @TODO: code goes here. */
    event.preventDefault();
    console.log('Email address ' + this.state.value + ' was submitted to Sendgrid');
    NewsLetterService.submitEmail(this.state.value);
  }
1
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <button type="submit">Subscribe!</button>
      </form>
    )
  }
}

export default NewsletterSignup;