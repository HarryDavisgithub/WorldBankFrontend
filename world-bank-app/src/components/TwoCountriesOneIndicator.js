import React, { useState, useEffect, PureComponent } from "react";
import {
  Label,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Network from "../Network.js";
import Logo from "../assets/bank-logo.png";

export default function TwoCountriesOneIndicator(props) {
  const network = new Network();
  const data = [
    {
      year: 1960,
      firstCountry: 2400,
      secondCountry: 1000,
    },
    {
      year: 1970,
      firstCountry: 1398,
      secondCountry: 2400,
    },
    {
      year: 1980,
      firstCountry: 9800,
      secondCountry: 5000,
    },
    {
      year: 1990,
      firstCountry: 3908,
      secondCountry: 8000,
    },
    {
      year: 2000,
      firstCountry: 4800,
      secondCountry: 2400,
    },
    {
      year: 2010,
      firstCountry: 3800,
      secondCountry: 4800,
    },
    {
      year: 2020,
      firstCountry: 4300,
      secondCountry: 6700,
    },
  ];

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
          <h2 className="align-items-center">
            {props.firstCountry}, {props.secondCountry}
          </h2>
          <h4>{props.indicator}</h4>
          <br />
          <LineChart
            width={1150}
            height={400}
            data={data}
            margin={{
              top: 5,
              right: 0,
              left: 0,
              bottom: 25,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year">
              <Label value="Year" position="insideBottom" offset={-20} />
            </XAxis>
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="firstCountry"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="secondCountry" stroke="#82ca9d" />
          </LineChart>
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
