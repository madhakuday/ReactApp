import React, { Component } from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

export class Loading extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: true,
    };
  }
  handleClose = () => {
    this.setState({ open: false });
  };
  handleToggle = () => {
    this.setState({ open: !this.state.open });
  };

  componentDidMount() {
    console.log("Drop call");
  }
  render() {
    return (
      <>
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={this.props.val}
          onClick={this.handleClose}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </>
    );
  }
}

export default Loading;
