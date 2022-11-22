import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Button } from '@emilohlund-git/tailwind-component-lib';
import '@emilohlund-git/tailwind-component-lib/dist/tailwind.css';

const App = () => {
  return (
    <div>
      <Button variant="primary" size="medium" text="Button" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
