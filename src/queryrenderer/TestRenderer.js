import React from 'react';
import graphql from 'babel-plugin-relay/macro';
import { QueryRenderer } from 'react-relay';

export default function TestRenderer({ environment, query }) {
    return (
        <QueryRenderer
            environment={environment}
            query={query}
            variables={{}}
            render={({error, props}) => {
                if (props) {
                    return <p>hh</p>;
                } else if (error) {
                    return error.message;
                }
                return 'Loading...';
            }}
        />
    );
}