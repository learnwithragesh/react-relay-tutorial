// your-app-name/src/App.js
import { useState } from 'react';

import { repositoryInfo, repositoryList } from './utils/queries';
import Fetch from './fetch';
import Relay from './relay';
import './App.css';

function App() {

  let [type, setType] = useState('normal');

  return (
    <div className="App">
      <div className="App">
        <input type="radio" name="type" 
          onChange={() => setType('normal')} checked={ type === 'normal' }/> Normal Fetch
        <input type="radio" name="type" 
          onChange={() => setType('relay')}  checked={ type === 'relay' }/> Relay Fetch
      </div>
      <div className="App">
        { type === 'normal' && <Fetch query={repositoryInfo}/> }
        { type === 'relay' && <Relay query={repositoryInfo}/> }
      </div>
    </div>
  );

}

export default App;