import React from 'react';
import NewsLetterService from './NewsLetterService';

class NewsletterSignup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      successMessage: "",
      validationMessage:"",
      disabled: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  valiadteEmail = (email) => {
    var re = /^([a-z0-9_\-\.]+)@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/;
    return re.test(email)
  }

  handleChange(event) {
    this.setState({ value: event.target.value, successMessage: "",validationMessage:"" });
  }

  handleSubmit(event) {
    event.preventDefault();

    let result = this.valiadteEmail(this.state.value);
    
    if(result) {
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
    } else {
      this.setState({
        ...this.state,
        validationMessage:"Please enter valid email"
      })
    }

    
  }

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          <button type="submit" disabled={this.state.disabled}>Subscribe!</button>
          <h3>{this.state.successMessage}</h3>
          <h3>{this.state.validationMessage}</h3>
        </form>
      </React.Fragment>
    )
  }
}

export default NewsletterSignup;