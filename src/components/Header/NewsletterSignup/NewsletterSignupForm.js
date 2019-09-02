import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './NewsletterSignupForm.module.scss'

class NewsletterSignupForm extends React.Component {
  constructor( props ) {
    super(props);
    this.state = {
      emailAddress: '',
      successMessage: false,
      validationMessage: '',
      isSubscribed: false,
      dailySelected: false,
      weeklySelected: false,
    };

    this.addEmailToSendGrid = this.addEmailToSendGrid.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleDaily = this.toggleDaily.bind(this);
    this.toggleWeekly = this.toggleWeekly.bind(this);
  }

  ErrorMessage = "Something went wrong please try again";
  SuccessMessage = "Thank You!!!";

  validateEmail = (email) => {
    const re = /^([a-zA-Z0-9_\-.]+)@[a-zA-Z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/;
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
      emailAddress: event.target.value,
      successMessage: false,
      validationMessage:""
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

    let result = this.validateEmail(this.state.emailAddress);

    if(result) {
      this.setState({
        disabled: true
      }, async () => {
        await this.addEmailToSendGrid(this.state.emailAddress);
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
      //this.refs.headerSignupInput.focus();
    }
  }

  render() {

    if (!this.state.successMessage) {
      let formClasses = this.props.signupClass + ' ' + styles.wrapper;
      if (this.props.visible) {
        formClasses = formClasses + ' ' + styles.open;
      }
      let emailVisible = false;
      if (this.state.dailySelected || this.state.weeklySelected) {
        emailVisible = true;
      }
      return (
          <div className={formClasses}>
            <DailySelection selected={this.state.dailySelected} handleClick={this.toggleDaily} />
            <WeeklySelection selected={this.state.weeklySelected} handleClick={this.toggleWeekly} />
            <EmailForm formVisible={emailVisible} handleChange={this.handleChange} />
            <p className={styles.privacyPolicy}>By signing up you agree to our <Link to={'https://www.3blmedia.com/sites/www.3blmedia.com/files/pdf/3BL_Media_privacy_policy.pdf'}>privacy policy</Link>. You can opt out anytime.</p>
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

const DailySelection = (props) => {
  return (
    <div className={styles.dailySelector}>
      <img src={''} className={'logo'} alt={'logo'} />
      <p className={styles.description}>Wake up <span className={styles.frequency}>daily</span> to our latest coverage of business done better, directly in your inbox.</p>
      <AddButton isSelected={props.selected} handleClick={props.handleClick} subtext={'Sign me up'} />
    </div>
  )
}

const WeeklySelection = (props) => {
  return (
    <div className={styles.weeklySelector}>
      <img src={''} className={'logo'} alt={'logo'} />
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
              <input className={styles.emailBox} type="text"
                     value={''} onChange={props.handleChange} placeholder={'Email address'}/>
              <button className={styles.button} type="submit"
                      disabled={false}>Subscribe</button>
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

export default NewsletterSignupForm;
