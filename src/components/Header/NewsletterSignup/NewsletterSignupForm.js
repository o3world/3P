import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './NewsletterSignupForm.module.scss'

import BTS_logo from '../../../assets/images/BTS_Logo_BLK.png'
import TBL_logo from '../../../assets/images/3P_Logo_BLK.png'

class NewsletterSignupForm extends React.Component {
  constructor( props ) {
    super(props);
    this.state = {
      emailAddress: '',
      successMessage: false,
      validationMessage: '',
      isEmailValid: false,
      isSubscribed: false,
      dailySelected: false,
      weeklySelected: false,
    };

    this.addEmailToSendGrid = this.addEmailToSendGrid.bind(this);
    this.handleEmailInput = this.handleEmailInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleDaily = this.toggleDaily.bind(this);
    this.toggleWeekly = this.toggleWeekly.bind(this);
  }

  ErrorMessage = "Something went wrong please try again";
  SuccessMessage = "Thank You!!!";

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

  handleEmailInput(event) {
    const emailRegEx = /^([a-zA-Z0-9_\-.]+)@[a-zA-Z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/;
    this.setState({
      emailAddress: event.target.value,
      isEmailValid: emailRegEx.test(event.target.value),
    });
  }

  toggleDaily() {
    this.setState({
      dailySelected: !this.state.dailySelected,
    });
  }

  toggleWeekly() {
    this.setState({
      weeklySelected: !this.state.weeklySelected,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({
      isSubscribed: true,
    })

    // this.setState({
    //   disabled: true
    // }, async () => {
    //   await this.addEmailToSendGrid(this.state.emailAddress);
    //   this.setState({
    //     successMessage: true,
    //     value: "",
    //     disabled: false
    //   })
    // })
  }

  render() {
      let formClasses = this.props.signupClass + ' ' + styles.wrapper;
      if (this.props.visible) {
        formClasses = formClasses + ' ' + styles.open;
      }
      let emailVisible = false;
      if (this.state.dailySelected || this.state.weeklySelected) {
        emailVisible = true;
      }

    if (!this.state.isSubscribed) {
      return (
          <div className={formClasses}>
            <DailySelection selected={this.state.dailySelected} handleClick={this.toggleDaily} />
            <WeeklySelection selected={this.state.weeklySelected} handleClick={this.toggleWeekly} />
            <EmailForm formVisible={emailVisible} submitHandler={this.handleSubmit} handleEmailInput={this.handleEmailInput} validEmail={this.state.isEmailValid} emailAddress={this.state.emailAddress} />
            <p className={styles.privacyPolicy}>By signing up you agree to our <Link to={'https://www.3blmedia.com/sites/www.3blmedia.com/files/pdf/3BL_Media_privacy_policy.pdf'}>privacy policy</Link>. You can opt out anytime.</p>
          </div>
      )
    }
    else {
      return (
        <div className={formClasses}>
          <ThankYouMessage emailAddress={this.state.emailAddress} />
        </div>
      )
    }
  }
}

const ThankYouMessage = (props) => {
  return (
    <div className={styles.thankyou_container}>
      <h1 className={styles.thankyou_thanks}>Thanks for inviting us into your inbox!</h1>
      <h2 className={styles.thankyou_almostDone}>Almost done.</h2>
      <div className={styles.thankyou_confirmationDetails}>
        <p className={styles.thankyou_confirmationSent}>Confirmation email sent</p>
        <p>An email has been sent to {props.emailAddress}.</p>
        <p>Click the confirmation link in your email to activate your account!</p>
      </div>
    </div>
  )
}

const DailySelection = (props) => {
  return (
    <div className={styles.dailySelector}>
      <img src={TBL_logo} className={styles.logo} alt={'logo'} />
      <p className={styles.description}>Wake up <span className={styles.frequency}>daily</span> to our latest coverage of business done better, directly in your inbox.</p>
      <AddButton isSelected={props.selected} handleClick={props.handleClick} subtext={'Sign me up'} />
    </div>
  )
}

const WeeklySelection = (props) => {
  return (
    <div className={styles.weeklySelector}>
      <img src={BTS_logo} className={styles.logo} alt={'logo'} />
      <p className={styles.description}>Get your <span className={styles.frequency}>weekly</span> dose of analysis on rising corporate activism.</p>
      <AddButton isSelected={props.selected} handleClick={props.handleClick} subtext={'Yes, I\'m in'} />
    </div>
  )
}

const AddButton = (props) => {
  if(!props.isSelected) {
    return (
      <React.Fragment>
        <button className={styles.addButton} onClick={props.handleClick}>Add</button>
        <p className={styles.addButtonSubtext}></p>
    </React.Fragment>)
  }
  else {
    return (
      <React.Fragment>
        <button className={styles.addButton_selected} onClick={props.handleClick}><FontAwesomeIcon icon={'check-circle'} /></button>
        <p className={styles.addButtonSubtext}>{props.subtext}</p>
      </React.Fragment>)
  }
}

const EmailForm = (props) => {
  if (props.formVisible) {
    return (
      <form onSubmit={props.handleSubmit} className={styles.form}>
        <input className={styles.emailBox} type="text" value={props.emailAddress} onInput={props.handleEmailInput} placeholder={'enter email'}/>
        <SubmitButton submitHandler={props.submitHandler} validEmail={props.validEmail} />
      </form>
    )
  }
  else {
    return (
      <SelectNewsletter />
    )
  }
}

const SelectNewsletter = () =>
  <div className={styles.emailBox_noneSelected}>
    <p>Select Newsletter</p>
  </div>;

const SubmitButton = (props) => {
  if (props.validEmail) {
    return (
      <button className={styles.submitButton_enabled} onClick={props.submitHandler}>Subscribe</button>
    )
  }
  else {
    return (
      <div className={styles.submitButton_disabled}>Subscribe</div>
    )
  }
}

export default NewsletterSignupForm;
