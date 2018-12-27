import React from 'react';
import NewsLetterService from './NewsLetterService';

class NewsletterSignup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      successMessage: false,
      errorMessage: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  valiadteEmail = (email) => {
    var re = /^([a-z0-9_\-\.]+)@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/;
    return re.test(email)
  }

  handleChange(event) {
    this.setState({ value: event.target.value, errorMessage: "",successMessage:false });
  }

  async handleSubmit(event) {
    /* @TODO: code goes here. */
    event.preventDefault();
    let result = this.valiadteEmail(this.state.value);
    if (result) {
      let status = await NewsLetterService.submitEmail(this.state.value);
      if(status === 201) {
        this.setState({
          ...this.state,
          successMessage: true
        })
      }
    } else {
      this.setState({
        ...this.state,
        errorMessage: "Plese enter valid email"
      })
    }


  }

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          <button type="submit">Subscribe!</button>
          {this.state.successMessage ? <h3>Thank you for subscription!!!</h3> : null}
          <h3>{this.state.errorMessage}</h3>
        </form>
      </React.Fragment>
    )
  }
}

export default NewsletterSignup;