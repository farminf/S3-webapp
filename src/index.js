import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import Amplify from "aws-amplify";
import awsConfig from "./utils/awsconfig";
import configureStore from "./store/configureStore";
import { getCurrentSession, setSession } from "./actions/auth";
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
    ReactDOM.render(jsx, document.getElementById("root"));
    registerServiceWorker();
  });
