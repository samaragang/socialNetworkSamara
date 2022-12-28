import React from "react";
import { connect } from "react-redux";
import Navbar from "./Navbar";

const mapStateToProps = (state) => {
  return {
    friends: state.navbar,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);

export default NavbarContainer;
