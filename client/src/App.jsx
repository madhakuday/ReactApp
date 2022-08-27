import React, { Component } from "react";

import RoutesPage from "./Routes/RoutesPage";
import { BrowserRouter } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { login } from "./Redux/UserClice";
import store from "./Redux/store";

export class App extends Component {
  constructor(props) {
    super(props);

    this.UserLoginData();
  }

  UserLoginData() {
    const getlocaldata = localStorage.getItem("registerdata");
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

  componentDidMount() {}
  render() {
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
