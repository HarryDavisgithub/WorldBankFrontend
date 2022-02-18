import "./App.css";
import Search from "./components/Search";
import "bootstrap/dist/css/bootstrap.min.css";
import MainPage from "./components/MainPage";
import { useCookies } from "react-cookie";
import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import OneCountry from "./components/OneCountry";
import OneCountryOneIndicator from "./components/OneCountryOneIndicator";
import OneCountryOneIndicatorOneYear from "./components/OneCountryOneIndicatorOneYear";
import TwoCountriesOneIndicator from "./components/TwoCountriesOneIndicator";
import TwoCountriesOneIndicatorOneYear from "./components/TwoCountriesOneIndicatorOneYear";
import PageSelector from "./components/PageSelector";

function App() {
  const [cookies, setCookie] = useCookies(["sessionId"]);
  const [isLoggedIn, setIsLoggedIn] = useState(cookies.sessionId);

  const [selectedCountries, setSelectedCountries] = useState();
  const [selectedIndicator, setSelectedIndicator] = useState();
  const [selectedYear, setSelectedYear] = useState();

  useEffect(() => {
    console.log(isLoggedIn);
  }, [cookies.sessionId, isLoggedIn]);

  const deleteCookiesOnLogOut = () => {
    setCookie("sessionId", "");
    setIsLoggedIn("");
  };

  function getSelectedCountries(countries) {
    setSelectedCountries(countries);
  }

  function getSelectedIndicators(indicator) {
    setSelectedIndicator(indicator);
  }

  function getSelectedYear(year) {
    setSelectedYear(year);
  }

  return (
    <OneCountry country={"Afghanistan"} />
    // <Routes>
    //   <Route
    //     path="/"
    //     element={
    //       !isLoggedIn ? (
    //         <MainPage setIsLoggedIn={setIsLoggedIn} />
    //       ) : (
    //         <>
    //           <Navigate replace to="/search" />
    //         </>
    //       )
    //     }
    //   />
    //   <Route
    //     path="/page-selection"
    //     element={
    //       <PageSelector
    //         country={selectedCountries}
    //         indicator={selectedIndicator}
    //         year={selectedYear}
    //       />
    //     }
    //   />
    //   <Route
    //     path="/search"
    //     element={
    //       isLoggedIn ? (
    //         <>
    //           <button onClick={deleteCookiesOnLogOut}>Delete</button>
    //           <Search
    //             getSelectedCountries={getSelectedCountries}
    //             getSelectedIndicators={getSelectedIndicators}
    //             getSelectedYear={getSelectedYear}
    //           />
    //         </>
    //       ) : (
    //         <Navigate replace to="/" />
    //       )
    //     }
    //   />
    //   <Route
    //     path="/OneCountryOneIndicator"
    //     element={
    //       isLoggedIn ? (
    //         <OneCountryOneIndicator
    //           country={"Albania"}
    //           indicator={"Indicator"}
    //         />
    //       ) : (
    //         <Navigate replace to="/" />
    //       )
    //     }
    //   />
    // </Routes>
  );
}

export default App;
