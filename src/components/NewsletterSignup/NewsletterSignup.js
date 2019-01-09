import React from 'react';
import { SENDGRID } from '../Common/Constants';

class NewsletterSignup extends React.Component {
  constructor( props ) {
    super(props);
    this.state = {
      value: '',
      successMessage: "",
      validationMessage:"",
      disabled: false
    };

    this.addEmailToList = this.addEmailToList.bind(this);
    this.addEmailToSendGrid = this.addEmailToSendGrid.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  ErrorMessage = "Something went wrong please try again";
  SuccessMessage = "Thank You!!!";

  validateEmail = (email) => {
    const re = /^([a-z0-9_\-.]+)@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/;
    return re.test(email)
  };

  addEmailToSendGrid = async (email) => {
    try {
      const response = await fetch(SENDGRID.API, {
        method: "POST",
        body: JSON.stringify([{ "email": email }]),
        headers: {
          "authorization": "Bearer " + SENDGRID.API_KEY,
          "Content-Type": "application/json"
        }
      });

      let data = await response.json();
      try {
        let status = await this.addEmailToList(SENDGRID.LIST_API + data.persisted_recipients[0]);
        if (status === 201) {
          return this.SuccessMessage;
        } else {
          return this.ErrorMessage
        }
      } catch (error) { return this.ErrorMessage }
    } catch (error) { return this.ErrorMessage }
  };

  addEmailToList = async (url) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "authorization": "Bearer " + SENDGRID.API_KEY,
        }
      });
      return response.status;
    } catch (error) {
      return this.ErrorMessage
    }
  };

  handleChange(event) {
    this.setState({ value: event.target.value, successMessage: "",validationMessage:"" });
  }

  handleSubmit(event) {
    event.preventDefault();

    let result = this.validateEmail(this.state.value);
    
    if(result) {
      this.setState({
        disabled: true
      }, async () => {
        let message = await this.addEmailToSendGrid(this.state.value);
        this.setState({
          successMessage: message,
          value: "",
          disabled: false
        })
      })
    } else {
      this.setState({
        validationMessage:"Please enter valid email"
      })
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <button type="submit" disabled={this.state.disabled}>Subscribe!</button>
        <h3>{this.state.successMessage}</h3>
        <h3>{this.state.validationMessage}</h3>
      </form>
    )
  }
}

export default NewsletterSignup;