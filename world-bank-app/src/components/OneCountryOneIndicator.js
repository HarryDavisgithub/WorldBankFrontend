import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import { propTypes } from "react-bootstrap/esm/Image";
import Network from "../Network.js";

export default function OneCountryOneIndicator(props) {
  const network = new Network();
  const countryIndicatorInfo = network.getCountryIndicatorInfo();
  console.log(countryIndicatorInfo);
  // useEffect(() => {
  //   (async () => {

  //   }
  // })

  return (
    <Container>
      <h1>{props.country}</h1>
      <h1>{props.indicator}</h1>
    </Container>
  );
}
