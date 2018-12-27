import React from 'react';
import NewsLetterService from './NewsLetterService';

class NewsletterSignup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      successMessage: "",
      disabled: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value, successMessage: "" });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({
      ...this.state,
      disabled: true
    }, async () => {
      let message = await NewsLetterService.addEmailToSendGrid(this.state.value);
      this.setState({
        ...this.state,
        successMessage: message,
        value: "",
        disabled: false
      })
    })
  }

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          <button type="submit" disabled={this.state.disabled}>Subscribe!</button>
          <h3>{this.state.successMessage}</h3>
        </form>
      </React.Fragment>
    )
  }
}

export default NewsletterSignup;