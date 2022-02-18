import React, { useState, useEffect, PureComponent } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Network from "../Network.js";
import Logo from "../assets/bank-logo.png";

export default function TwoCountriesOneIndicatorOneYear(props) {
  const network = new Network();
  const [data, setData] = useState();

  useEffect(() => {
    (async () => {
      setData(
        await network.getTwoCountriesIndicatorYearInfo(
          props.countries[0],
          props.countries[1],
          props.indicator,
          props.year
        )
      );
    })();
  }, []);

  function checkResponse() {
    if ("response" in data) {
      return (
        <p>
          Please choose a different first country, second country or indicator
          combination.
        </p>
      );
    } else {
      return (
        <Container className="py-5">
          <h2>{props.year}</h2>
          <h4>{props.indicator}</h4>
          <h4>
            {props.countries[0]}: {Number(data[0].Value)}
          </h4>{" "}
          <h4>
            {props.countries[1]}: {Number(data[1].Value)}
          </h4>
        </Container>
      );
    }
  }

  return (
    <Container className="py-4">
      <header className="border-bottom pb-3 mb-4">
        <Navbar>
          <Container>
            <Navbar.Brand href="/">
              <img src={Logo} height={50} alt="world-bank-logo" />{" "}
              <Button variant="primary">Search</Button>{" "}
              <Button variant="primary">History</Button>
            </Navbar.Brand>
          </Container>
          <Button
            variant="primary"
            className="text-nowrap"
            onClick={props.logOut}
          >
            Log Out
          </Button>
        </Navbar>
      </header>
      <div className="mb-4 bg-light rounded-3">
        {data ? checkResponse() : <p>loading</p>}
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
