import React from 'react';
import { withRouter } from 'react-router-dom';

class SearchForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: "",
            validate: false
        }
    }

    onChangeHandler = (e) => {
        if(this.state.value !== e.target.value) {
            this.setState({
                ...this.state,
                value: e.target.value,
                validate: false
            })
        } else {
            this.setState({
                ...this.state,
                validate: true
            })
        }
    };

    searchHandler = () => {
        if(this.state.value === "" && this.state.validate === false) {
            this.setState({
                ...this.state,
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

    render() {
        return (
            <div>
                <input type="text" onChange={(e) => this.onChangeHandler(e)} onKeyPress={(e) => this.handleKeyPress(e)}></input>
                <button onClick={this.searchHandler}>Search</button>
                {this.state.validate ? <h3>Please enter value</h3> : null}
            </div>
        )
    }
}

export default withRouter(SearchForm);