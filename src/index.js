import React from "react";
import ReactDOM from "react-dom";
import { ConnectedRouter } from "connected-react-router";
import "./index.css";
import App from "./App";
import configureStore, { history } from "./redux/store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import reportWebVitals from "./reportWebVitals";
import AppContextProvider from "./components/contextProvider/AppContextProvider";
export const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <AppContextProvider>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <App/>
        </ConnectedRouter>
      </Provider>
    </AppContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
