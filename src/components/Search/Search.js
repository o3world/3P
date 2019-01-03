import React from 'react';
import { withRouter } from 'react-router-dom';

class Search extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            value: "",
            valiadte:false
        }
    }

    onChangeHandler = (e) => {
        this.setState({
            ...this.state,
            value: e.target.value,
            valiadte : false
        })
    }

    searchHandler = () => {
        if(this.state.value === "") {
            this.setState({
                ...this.state,
                valiadte:true
            })
        }else {
            this.props.history.push({
                pathname: "/search/" + this.state.value
            })
        }
    }

    handleKeyPress = (e) => {
        if (e.charCode == 13) {
            this.searchHandler();
        }
    }




    render() {
        return (
            <div>
                <input type="text" onChange={(e) => this.onChangeHandler(e)} onKeyPress={(e) => this.handleKeyPress(e)}></input>
                <button onClick={this.searchHandler}>Search</button>
                {this.state.valiadte ? <h3>Please enter value</h3> : null}
            </div>
        )
    }
}

export default withRouter(Search);