import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { Global, ThemeProvider } from '@emotion/react';
import { GlobalStyles, theme } from 'styles';
import { store } from 'redux/store';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyles} />
      <Provider store={store}>
        <BrowserRouter basename="goit-react-hw-08-phonebook">
          <App />
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
