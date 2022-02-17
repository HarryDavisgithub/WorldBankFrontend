import React, { useState, useEffect, PureComponent } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Network from "../Network.js";
import Logo from "../assets/bank-logo.png";

export default function OneCountryOneIndicatorOneYear(props) {
  const network = new Network();

  return (
    <Container className="py-4">
      <header className="border-bottom pb-3 mb-4">
        <Navbar>
          <Container>
            <Navbar.Brand href="#home">
              <img src={Logo} height={50} alt="world-bank-logo" />{" "}
              <Button variant="primary">Search</Button>{" "}
              <Button variant="primary">History</Button>
            </Navbar.Brand>
          </Container>
          <Button variant="primary" className="text-nowrap">
            Log Out
          </Button>
        </Navbar>
      </header>
      <div className="mb-4 bg-light rounded-3">
        <Container className="py-5">
          <h2>{props.country}</h2>
          <div>
            <h4>
              {props.indicator}: {props.value}
            </h4>
          </div>
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
