import React from 'react'
import SearchWrapper from './SearchWrapper'

import LoadingSpinner from "../Common/LoadingSpinner"
import PageTemplate from '../Common/PageTemplate'

class SearchResult extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: null,
            message: null,
            loading: true
        };

        this.searchKeyword = (this.props.location.state !== undefined)? encodeURIComponent(this.props.location.state.value): encodeURIComponent(this.props.match.params.searchterm);
        this.fetchInformation(this.searchKeyword);
    }
    
    componentWillReceiveProps(nextProps) {
        let searchKeyword = encodeURIComponent(nextProps.location.state.value);
        this.fetchInformation(searchKeyword);
        return true;
    }

    fetchInformation = (searchKeyword) => {
        const url =  "https://back.3blmedia.com/search/solr/{{searchkey}}?_format=json".replace("{{searchkey}}", searchKeyword);
        this.setState({loading: true});
        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    data: data.length > 0 ? data : null,
                    message : `Results for ${this.props.match.params.searchterm}`,
                    loading : false
                });
            })
            .catch(error => {
                this.setState({
                    message : error
                }
            )
        });
    };

    render() {
        return (
            <PageTemplate>
                {!this.state.loading ? this.state.data === null ? <h1>No Results Found</h1> : null : null}
                {this.state.loading ? <LoadingSpinner/> :<SearchWrapper data={this.state.data}/> }
            </PageTemplate>
        )
    }
}

export default SearchResult;