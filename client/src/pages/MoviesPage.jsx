import React, { Component, Suspense } from "react";
import Container from "@mui/material/Container";

import MoviesMain from "../components/MoviesPageComponents/MoviesMain";

export class MoviesPage extends Component {
  render() {
    return (
      <>
        <Container>
          <MoviesMain />
        </Container>
      </>
    );
  }
}

export default MoviesPage;
