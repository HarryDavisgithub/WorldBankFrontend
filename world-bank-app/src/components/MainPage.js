import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import SignUpModal from "./SignUpModal";
import LogInModal from "./LogInModal";
import Logo from "../assets/bank-logo.png";

export default function MainPage(props) {
  const [showSignUp, setShowSignUp] = useState(false);
  const [showLogIn, setShowLogIn] = useState(false);

  const handleCloseSignUp = () => {
    setShowSignUp(false);
  };
  const handleShowSignUp = () => {
    setShowSignUp(true);
  };
  const handleCloseLogIn = () => {
    setShowLogIn(false);
  };
  const handleShowLogIn = () => {
    setShowLogIn(true);
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img src={Logo} height={50} alt="world-bank-logo" />
        </Navbar.Brand>
        <div>
          <Button variant="primary" onClick={handleShowSignUp}>
            Sign Up
          </Button>{" "}
          <Button variant="primary" onClick={handleShowLogIn}>
            Log In
          </Button>
        </div>
      </Container>
      <SignUpModal show={showSignUp} handleClose={handleCloseSignUp} />
      <LogInModal show={showLogIn} handleClose={handleCloseLogIn} />
      {/* {signUpModal()} */}
    </Navbar>
  );
}
