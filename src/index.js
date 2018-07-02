/**
 * @author FarminF
 * @email farmin.f@gmail.com
 * @create date 2018-07-02 12:43:56
 * @modify date 2018-07-02 12:43:56
 * @desc [description]
 */

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import Amplify from "aws-amplify";
import awsConfig from "./utils/awsconfig";
import configureStore from "./store/configureStore";
import { getCurrentSession, setSession, loggedOut } from "./actions/auth";
import LoadingProgress from "./components/LoaingProgress";

const store = configureStore();
Amplify.configure(awsConfig);

const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<LoadingProgress />, document.getElementById("root"));

store
  .dispatch(getCurrentSession())
  .then(data => {
    console.log(data);
    store.dispatch(setSession(data));
    ReactDOM.render(jsx, document.getElementById("root"));
    registerServiceWorker();
  })
  .catch(err => {
    console.log(err);
    store.dispatch(loggedOut());
    ReactDOM.render(jsx, document.getElementById("root"));
    registerServiceWorker();
  });
