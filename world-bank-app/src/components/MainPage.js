import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import SignUpModal from "./SignUpModal";
import LogInModal from "./LogInModal";
import Logo from "../assets/bank-logo.png";
import Networking from "../Network";

const Network = new Networking();

export default function MainPage(props) {
  const [showSignUp, setShowSignUp] = useState(false);
  const [showLogIn, setShowLogIn] = useState(false);

  const handleShowSignUp = () => {
    setShowSignUp(!showSignUp);
  };

  const handleShowLogIn = () => {
    setShowLogIn(!showLogIn);
  };

  return (
    <Container className="py-4">
      <header className="border-bottom pb-3 mb-4">
        <Navbar>
          <Container>
            <Navbar.Brand href="#home">
              <img src={Logo} height={50} alt="world-bank-logo" />
            </Navbar.Brand>
            <div></div>
          </Container>
          <SignUpModal
            show={showSignUp}
            handleClose={handleShowSignUp}
            postSignup={Network.postSignup}
          />
          <LogInModal
            show={showLogIn}
            handleClose={handleShowLogIn}
            postLogin={Network.postLogin}
            setIsLoggedIn={props.setIsLoggedIn}
          />
        </Navbar>
      </header>
      <div className="p-5 mb-4 bg-light rounded-3">
        <Container className="py-5">
          <h1 className="display-5 fw-bold">Delta Stats Interface</h1>
          <p className="col-md-8 fs-4">
            Using a series of tools, this interface has been created to
            visulaise the data from The World Bank database. Log in or sign up
            to gain access.
          </p>
          <Button variant="primary" onClick={handleShowSignUp}>
            Sign Up
          </Button>{" "}
          <Button variant="primary" onClick={handleShowLogIn}>
            Log In
          </Button>
        </Container>
      </div>
      <Container>
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <p className="col-md-4 mb-0 text-muted">© 2022 Team Delta</p>
          <div className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
            <img
              className="bi me-2"
              height="32"
              src={Logo}
              alt="world-bank-logo"
            ></img>
          </div>
        </footer>
      </Container>
    </Container>
  );
}
