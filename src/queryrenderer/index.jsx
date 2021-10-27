import React from 'react';
import graphql from 'babel-plugin-relay/macro';
import { QueryRenderer } from 'react-relay';
import ReactJson from 'react-json-view';

import Environment from '../utils/RelayEnvironment';

const RepositoryNameQuery = graphql`
  query queryrendererRepositoryNameQuery {
    repository(owner: "facebook", name: "relay") {
      id 
      name
      issues(first: 20) {
          edges {
            node {
              title
            }
          }
      }
    }
  }
`;

const renderQuery = ({error, props}) => {
  if (error) {
    return <div>{error.message}</div>;
  } else if (props) {
    return <ReactJson src={props} />;
  }
  return <p>Loading</p>;
}

const Example = (props) => {
  return (
    <QueryRenderer
      environment={Environment}
      query={RepositoryNameQuery}
      variables={{
        pageID: '110798995619330',
      }}
      render={renderQuery}
    />
  );
}

export default Example;