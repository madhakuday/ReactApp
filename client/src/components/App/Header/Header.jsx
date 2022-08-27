import React, { Component } from "react";
import { Box, IconButton, Toolbar } from "@mui/material";

import { Divider, Dropdown, Menu } from "antd";

//css
import "./Header.css";
import HeadreDrawer from "./HeaderDrawer";
import { Link } from "react-router-dom";
import store from "../../../Redux/store";

export class Header extends Component {
  constructor(props) {
    super(props);

    const data = this.getCurrentStateFromStore();
    this.state = { isLogedin: data.User };
  }
  menu = (
    <Menu
      style={{ display: "flex", flexDirection: "column" }}
      items={[
        {
          key: "1",
          label: <Link to="/movies">Movies</Link>,
        },
        {
          key: "2",
          label: <Link to="/cripto">Crypto</Link>,
        },
        {
          key: "3",
          label: (
            <a href=" " target="_blank" rel="noopener noreferrer">
              3rd menu item
            </a>
          ),
        },
      ]}
    />
  );

  getCurrentStateFromStore() {
    return {
      User: store.getState().user.user,
    };
  }

  componentDidMount() {
    console.log("Data is ", this.state.isLogedin.isAuth);
  }

  render() {
    return (
      <>
        {this.state.isLogedin.isAuth ? (
          <Box className="header_1_box">
            <Toolbar>
              <Box className="mobile_header">
                <HeadreDrawer> </HeadreDrawer>
              </Box>
              <Box className="big_screen_menu">
                <Box>
                  <IconButton color="inherit">Icon</IconButton>
                </Box>
                <Box>
                  <ul>
                    <li>
                      <Link to="/">Homes</Link>
                    </li>
                    <li>About us</li>
                    <Dropdown overlay={this.menu} placement="bottomLeft" arrow>
                      <li>section</li>
                    </Dropdown>
                  </ul>
                </Box>
              </Box>
            </Toolbar>
          </Box>
        ) : (
          <>
            <Box className="header_1_box">
              <Toolbar>
                <Box className="mobile_header">
                  <HeadreDrawer> </HeadreDrawer>
                </Box>
                <Box className="big_screen_menu">
                  <Box>
                    <IconButton color="inherit">Icon</IconButton>
                  </Box>
                  <Box>
                    <ul>
                      <li>
                        <Link to="/register">Register</Link>
                      </li>
                      <li>
                        <Link to="/login">Login</Link>
                      </li>
                    </ul>
                  </Box>
                </Box>
              </Toolbar>
            </Box>
            <Divider style={{ color: "white" }}>
              register to show movie and crypto etc..
            </Divider>
          </>
        )}
      </>
    );
  }
}

export default Header;
