import React from 'react';
import graphql from 'babel-plugin-relay/macro';
import {
  RelayEnvironmentProvider,
  loadQuery,
  usePreloadedQuery,
} from 'react-relay/hooks';
import ReactJson from 'react-json-view';
import RelayEnvironment from '../utils/RelayEnvironment';

const { Suspense } = React;

const RepositoryNameQuery = graphql`
  query relayRepositoryNameQuery {
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

const preloadedQuery = loadQuery(RelayEnvironment, RepositoryNameQuery, {
    /* query variables */
});

function App(props) {
    const data = usePreloadedQuery(RepositoryNameQuery, props.preloadedQuery);

    return (
        <div className="App">
        <header className="App-header">
        { data ? <ReactJson src={data} /> : "Loading" }
        </header>
        </div>
    );
}

function AppRoot(props) {
    return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
        <Suspense fallback={'Loading...'}>
        <App preloadedQuery={preloadedQuery} />
        </Suspense>
    </RelayEnvironmentProvider>
    );
}
  
export default AppRoot;