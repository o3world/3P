import React from 'react';
import NewsLetterService from './NewsLetterService';

class NewsletterSignup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      value: '',
      successMessage : false
     };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  async handleSubmit(event) {
    /* @TODO: code goes here. */
    event.preventDefault();
    console.log('Email address ' + this.state.value + ' was submitted to Sendgrid');
    let status = await NewsLetterService.submitEmail(this.state.value);
    if(status === 201) {
      this.setState({
        ...this.state,
        successMessage: true
      })
    }
  }

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          <button type="submit">Subscribe!</button>
         {this.state.successMessage ? <h3>Thank you for subscription!!!</h3> : null } 
        </form>
      </React.Fragment>
    )
  }
}

export default NewsletterSignup;