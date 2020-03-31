import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";

    // window.getState = store.getState;
    // window.dispatch = store.dispatch;
    // window.login = login;
    // window.logout = logout;
    // window.signup = signup;
    
document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");

  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: { 
        id: window.currentUser.id ,
        currentUser: window.currentUser,
      },
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  ReactDOM.render(<Root store={store} />, root);
});