import { Container } from "@mui/material";
import React, { Component } from "react";
import Hero from "../components/Hero/Hero";

export class Main extends Component {
  render() {
    return (
      <>
        <Container>
          <Hero />
        </Container>
      </>
    );
  }
}

export default Main;
