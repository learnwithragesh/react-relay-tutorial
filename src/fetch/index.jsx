import React, { useState, useEffect } from 'react';
import ReactJson from 'react-json-view';

import fetchGraphQL from '../utils/fetchGraphQL';

export default function Fetch(props) {

    const [data, setData] = useState(null);

    useEffect(() => {
        fetchGraphQL(props.query).then(response => {
          setData(response);
        }).catch(error => {
          console.error(error);
        });
    });

    return (
      <div>
          { data ? <ReactJson src={data} /> : "Loading" }
      </div>  
    );
}