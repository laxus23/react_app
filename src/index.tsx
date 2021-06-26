import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import FullscreenContextProvider from 'contexts/fullscreen.context';

ReactDOM.render(
  <React.StrictMode>
    <FullscreenContextProvider>
      <App />
    </FullscreenContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
