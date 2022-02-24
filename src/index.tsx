import {StrictMode} from 'react';
import {render} from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import { Store } from './app/Store'
import { Provider } from 'react-redux'
import './index.scss';
import App from './App';

render(
  <StrictMode>
      <Provider store={Store}>
          <BrowserRouter>
              <App />
          </BrowserRouter>
      </Provider>
  </StrictMode>,
  document.getElementById('root')
);
