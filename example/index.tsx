import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Button } from '../src';
import '@atheneum/atheneum/dist/tailwind.css';

const App = () => {
  return (
    <div>
      <Button variant="primary-outline" size="medium">
        TEXT
      </Button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
