import {StrictMode} from 'react';
import {createRoot} from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import {Store} from './app/Store'
import {Provider} from 'react-redux'
import './index.scss';
import App from './App';

const root = createRoot(document.getElementById('root')!);
root.render(
  <StrictMode>
      <Provider store={Store}>
          <BrowserRouter>
              <App />
          </BrowserRouter>
      </Provider>
  </StrictMode>
);
