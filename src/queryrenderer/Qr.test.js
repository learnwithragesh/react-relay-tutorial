/**
 * @jest-environment jsdom
 */
import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import {
  createMockEnvironment,
  MockPayloadGenerator,
} from 'relay-test-utils';
import graphql from 'babel-plugin-relay/macro';
import { QueryRenderer } from 'react-relay';
import "core-js/stable";
import "regenerator-runtime/runtime";
import QR from './index';
import TestRenderer from './TestRenderer';

const query = graphql`
query QrQuery @relay_test_operation {
  user(login: "") {
      id
  }
}
`;

test('Loading State', () => {
    const environment = createMockEnvironment();
    const renderer = ReactTestRenderer.create(
        <QR environment={environment}/>
    );

    console.log(renderer.toJSON());

    expect(renderer.toJSON().type).toBe('p');
});

test('Data Render', () => {
    const environment = createMockEnvironment();
    const renderer = ReactTestRenderer.create(
        <TestRenderer environment={environment} query={query}/>
    );
    ReactTestRenderer.act(() => {
        environment.mock.resolveMostRecentOperation(operation =>
          MockPayloadGenerator.generate(operation),
        );
    });
    console.log(renderer.toJSON());

    expect(renderer.toJSON().type).toBe('p');
  });