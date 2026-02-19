import React from 'react';

import { Button, Margin, Select }  from '@react.ds/react';

import { createRoot } from 'react-dom/client';


// Optional: import built CSS from scss package
import '@react.ds/scss/dist/global.css';

const options = [{
    label: 'Strict Black',
    value: 'strict-black'
}, {
    label: 'Heavenly Green',
    value: 'heavenly-green'
}, {
    label: 'Sweet Pink',
    value: 'pink'
}]

const App = () => {
  return (
    <div style={{ padding: 24 }}>
      <Margin left space='xl'>
        <h1>Design System Playground</h1>
      </Margin>
        <Button label='Example Button 2'/>
        <Select options={options}/>
    </div>
  );
};

const container = document.getElementById('root');

if (!container) {
  throw new Error('Root container missing in index.html');
}

const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

