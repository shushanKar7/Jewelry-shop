import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Components/App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import store from './store'
import JewelrystoreService from './services/jewelry-service'
import { JewelrystoreServiceProvider }  from './Components/jewelry-service-context/jewelry-service-context';
 
const jewelrystoreService = new JewelrystoreService()


ReactDOM.render(
  <Provider store={store}>
    <JewelrystoreServiceProvider value={jewelrystoreService}>
    <App />
    </JewelrystoreServiceProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();