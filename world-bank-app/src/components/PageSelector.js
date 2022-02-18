import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import OneCountryOneIndicator from "./OneCountryOneIndicator";
import OneCountryOneIndicatorOneYear from "./OneCountryOneIndicatorOneYear";
import TwoCountriesOneIndicator from "./TwoCountriesOneIndicator";
import TwoCountriesOneIndicatorOneYear from "./TwoCountriesOneIndicatorOneYear";

function PageSelector(props) {
  function selectPage() {
    if (!props.countries || !props.year || !props.indicator) {
      return <Navigate replace to="/search" />;
    } else if (
      props.countries.length === 1 &&
      props.indicator !== "All" &&
      props.year === "All"
    ) {
      return (
        <OneCountryOneIndicator
          country={props.countries}
          indicator={props.indicator}
          logOut={props.logOut}
        />
      );
    } else if (
      props.countries.length === 1 &&
      props.indicator !== "All" &&
      props.year !== "All"
    ) {
      return (
        <OneCountryOneIndicatorOneYear
          country={props.countries}
          indicator={props.indicator}
          year={props.year}
          logOut={props.logOut}
        />
      );
    } else if (
      props.countries.length === 2 &&
      props.indicator !== "All" &&
      props.year === "All"
    ) {
      return (
        <TwoCountriesOneIndicator
          countries={props.countries}
          indicator={props.indicator}
          logOut={props.logOut}
        />
      );
    } else if (
      props.countries.length === 2 &&
      props.indicator !== "All" &&
      props.year !== "All"
    ) {
      return (
        <TwoCountriesOneIndicatorOneYear
          countries={props.countries}
          indicator={props.indicator}
          year={props.year}
          logOut={props.logOut}
        />
      );
    }
  }

  return selectPage();
}

export default PageSelector;
