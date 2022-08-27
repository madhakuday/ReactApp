import React, { Component } from "react";
import { Box, Container } from "@mui/material";
import { Form, Input, Button, Checkbox, message } from "antd";
import axios from "axios";
import { Navigate } from "react-router";

import "./login.css";
import withRouter from "../Hooks/WithRouter";
import store from "../Redux/store";
import { login } from "../Redux/UserClice";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    };
    this.onFinish = this.onFinish.bind(this);
    // console.log("navigate is ", this.props.navigate());
  }
  onFinish(values) {
    const { username, email, password } = values;

    axios
      .post("/api/loginuser", {
        username,
        email,
        password,
      })
      .then((data) => {
        if (data.status === 200) {
          message.success("Done");
          localStorage.setItem("registerdata", data.data.token);
          store.dispatch(
            login({
              userData: null,
              isAuth: true,
            })
          );
          this.props.navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  onFinishFailed(errorInfo) {
    message.error("fullfield all field");
  }

  render() {
    return (
      <>
        <Container>
          <Box className="form_box_1">
            <Form
              name="basic"
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 16,
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={this.onFinish}
              onFinishFailed={this.onFinishFailed}
              autoComplete="off"
              style={{ color: "white" }}
            >
              <Form.Item
                type="email"
                style={{ color: "inherit" }}
                label="Email  "
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your email!",
                  },
                ]}
              >
                <Input type="email" />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Box>
        </Container>
      </>
    );
  }
}

export default withRouter(Login);
