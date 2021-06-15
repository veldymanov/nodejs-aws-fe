import React from 'react';
import ReactDOM from 'react-dom';
import 'index.css';
import App from 'components/App/App';
import {store} from 'store/store';
import {Provider} from 'react-redux';
import * as serviceWorker from './serviceWorker';
import CssBaseline from "@material-ui/core/CssBaseline";
import axios from 'axios';

axios.interceptors.response.use(
  response => {
    return response;
  },
  function(error) {
    if (error?.response?.status === 400) {
      alert(error.response.data?.data);
    }

    if (error?.response?.status === 401 || error?.response?.status === 403) {
      alert(error.response.data?.message);
    }

    return Promise.reject(error?.response ?? error);
  }
);

const implicitGrant = getHashParams();
console.log('implicitGrant ', implicitGrant);

localStorage.setItem('access_token', implicitGrant.id_token);
// localStorage.setItem('authorization_token', 'dmVsZHltYW5vdjpURVNUX1BBU1NXT1JE');

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <CssBaseline/>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


function getHashParams() {
  const hash = window.location.hash.substr(1);

  return hash.split('&')
    .reduce((res: {[key: string]: string}, item)=> {
      const parts = item.split('=');
      res[parts[0]] = parts[1];
      return res;
    }, {});
};
