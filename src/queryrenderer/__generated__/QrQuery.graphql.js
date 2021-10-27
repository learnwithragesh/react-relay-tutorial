/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type QrQueryVariables = {||};
export type QrQueryResponse = {|
  +user: ?{|
    +id: string
  |}
|};
export type QrQuery = {|
  variables: QrQueryVariables,
  response: QrQueryResponse,
|};
*/


/*
query QrQuery {
  user(login: "") {
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Literal",
        "name": "login",
        "value": ""
      }
    ],
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "user",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      }
    ],
    "storageKey": "user(login:\"\")"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "QrQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "QrQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "2c2c44bb900b54544af4c57fe088b69d",
    "id": null,
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "user": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "User"
        },
        "user.id": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "ID"
        }
      }
    },
    "name": "QrQuery",
    "operationKind": "query",
    "text": "query QrQuery {\n  user(login: \"\") {\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '4e2a20349e100b33661f6a188a35f64d';

module.exports = node;
