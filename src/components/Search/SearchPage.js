import React from 'react';


class SearchPage extends React.Component {

    constructor(props) {
        super(props);

        this.state={
            value : ""
        }
    }

    onChangeHandler = (e) => {
        this.setState({
            ...this.state,
            value : e.target.value
        })
    }

    searchHandler = () => {
        /* @TODO api implementation to get data */
    }




    render() {
        return(
            <div>
                <input type="text" onChange={(e)=>this.onChangeHandler(e)}></input>
                <button onClick={this.searchHandler}>Search</button>
            </div>
        )
    }
}

export default SearchPage;