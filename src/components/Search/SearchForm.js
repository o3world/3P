import React from 'react';
import { withRouter } from 'react-router-dom';

import styles from './SearchForm.module.scss';

class SearchForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: "",
            validate: false
        };

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.searchHandler = this.searchHandler.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    onChangeHandler = (e) => {
        if(this.state.value !== e.target.value) {
            this.setState({
                value: e.target.value,
                validate: false
            })
        } else {
            this.setState({
                validate: true
            })
        }
    };

    searchHandler = () => {
        if(this.state.value === "" && this.state.validate === false) {
            this.setState({
                validate: true
            })
        } else {
            this.props.history.push({
                pathname: "/search/" + this.state.value
            }, this.state)
        }
    };

    handleKeyPress = (e) => {
        if (e.charCode === 13) {
            this.searchHandler();
        }
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.refs.headerSearchInput.focus();
    }

    render() {

      let formClass = styles.formWrapper + ' ' + this.props.formClass;
      if (this.props.visible) {
        formClass = formClass + ' ' + styles.open;
      }

      return (
          <div className={formClass}>
              <input ref={'headerSearchInput'} type="text" onChange={(e) => this.onChangeHandler(e)} onKeyPress={(e) => this.handleKeyPress(e)} value={this.state.value} className={styles.searchBox} placeholder={'Search'}></input>
              <button onClick={this.searchHandler} className={styles.button}>Go</button>
              {this.state.validate ? <h3>Please enter value</h3> : null}
          </div>
      )
    }
}

export default withRouter(SearchForm);