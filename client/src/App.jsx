import React, { Component } from "react";

import RoutesPage from "./Routes/RoutesPage";
import { BrowserRouter } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { login } from "./Redux/UserClice";
import store from "./Redux/store";

export class App extends Component {
  constructor(props) {
    super(props);
  }

  UserLoginData() {
    const getlocaldata = localStorage.getItem("registerdata");
    if (getlocaldata == null || undefined) {
      store.dispatch(
        login({
          userData: null,
          isAuth: false,
        })
      );
    } else {
      let data = jwt_decode(getlocaldata);

      if (data.username) {
        store.dispatch(
          login({
            userData: data,
            isAuth: true,
          })
        );
      } else {
        login({
          userData: null,
          isAuth: false,
        });
      }
    }
  }

  componentDidMount() {}
  render() {
    this.UserLoginData();

    return (
      <>
        <BrowserRouter>
          <RoutesPage />
        </BrowserRouter>
      </>
    );
  }
}

export default App;
