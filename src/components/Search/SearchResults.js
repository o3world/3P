import React from 'react';
import SearchWrapper from './SearchWrapper';
import { SEARCH_API } from '../Common/constant';

class SearchResult extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: null,
            message : null,
            loading: true
        }
        this.searchKeyword = (this.props.location.state !== undefined)? encodeURIComponent(this.props.location.state.value): encodeURIComponent(this.props.match.params.searchterm);
        this.fetchInformation(this.searchKeyword);
    }
    
    componentWillReceiveProps(nextProps, nextContext) {
        if(true){
            let searchKeyword = encodeURIComponent(nextProps.location.state.value);
            this.fetchInformation(searchKeyword);
        }
        return true;
    }

    fetchInformation = (searchKeyword) => {
        const url =  SEARCH_API.replace("{{searchkey}}", searchKeyword)
        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    ...this.state,
                    data: data.length > 0 ? data : null,
                    message : `Results for ${this.props.match.params.searchterm}`,
                    loading : false
                });
            }).catch(error => {
            this.setState({
                message : error
            })
        });
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                {!this.state.loading ? this.state.data === null ? <h1>No Results Found</h1> : null : null}
                {this.state.loading ? <h1>Loading...</h1> :<SearchWrapper data={this.state.data}/> }
            </div>
        )
    }
}

export default SearchResult;