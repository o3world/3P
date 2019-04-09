import React from 'react';

import styles from './NewsletterSignupForm.module.scss';

class NewsletterSignupForm extends React.Component {
  constructor( props ) {
    super(props);
    this.state = {
      value: '',
      successMessage: false,
      validationMessage: '',
      disabled: false
    };

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
      const url =  `https://back.3blmedia.com/subscribe3pUser/${email}`
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        }
      });
      let status = await response.json();
      if (status === 201) {
        return this.SuccessMessage;
      } else {
        return this.ErrorMessage
      }
    } catch (error) { return this.ErrorMessage }
  };

  handleChange(event) {
    this.setState({
      value: event.target.value,
      successMessage: false,
      validationMessage:""
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    let result = this.validateEmail(this.state.value);

    if(result) {
      this.setState({
        disabled: true
      }, async () => {
        await this.addEmailToSendGrid(this.state.value);
        this.setState({
          successMessage: true,
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

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (!this.state.successMessage) {
      this.refs.headerSignupInput.focus();
    }
  }

  render() {

    if (!this.state.successMessage) {
      let formClasses = this.props.signupClass + ' ' + styles.wrapper;
      if (this.props.visible) {
        formClasses = formClasses + ' ' + styles.open;
      }
      return (
          <div className={formClasses}>
            <form onSubmit={this.handleSubmit} className={styles.form}>
              <input ref={'headerSignupInput'} className={styles.emailBox} type="text"
                     value={this.state.value} onChange={this.handleChange} placeholder={'Email address'}/>
              <button className={styles.button} type="submit"
                      disabled={this.state.disabled}>Go</button>
              <h3>{this.state.validationMessage}</h3>
            </form>
            <div className={styles.privacyPolicy}>By signing up you agree to our <a href="https://www.3blmedia.com/sites/www.3blmedia.com/files/pdf/3BL_Media_privacy_policy.pdf" title="3BL Privacy Policy">privacy policy</a>. You can opt out anytime.</div>
          </div>
      )
    }
    else {
      let formClasses = this.props.signupClass + ' ' + styles.thanksMessage;
      if (this.props.visible) {
        formClasses = formClasses + ' ' + styles.open;
      }
      return (
        <div className={formClasses}>
          <h3>Thanks for signing up!</h3>
        </div>
      )
    }
  }
}

export default NewsletterSignupForm;
