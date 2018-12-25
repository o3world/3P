import React from 'react';

class NewsletterSignup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    /* @TODO: code goes here. */
    console.log('Email address ' + this.state.value + ' was submitted to Sendgrid');
    event.preventDefault();
  }

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