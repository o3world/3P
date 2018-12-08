import React from 'react';
import { Query } from "react-apollo";

const QueryHOC = (props) => <Query query={props.query} variables={props.variables}>
    {({ loading, error, data }) => {
        if (loading) return "Loading...";
        if (error) return `Error! ${error.message}`;
        const ComponentName = props.componentName;
        return (
            <React.Fragment>
            <ComponentName data={data} />
            </React.Fragment>
        )
    }}
</Query>

export default QueryHOC;