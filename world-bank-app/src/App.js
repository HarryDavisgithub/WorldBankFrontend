import "./App.css";
import Search from "./components/Search";
import "bootstrap/dist/css/bootstrap.min.css";
import MainPage from "./components/MainPage";
import { useCookies } from "react-cookie";
import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  const [cookies, setCookie] = useCookies(["sessionId"]);
  const [isLoggedIn, setIsLoggedIn] = useState(cookies.sessionId);

  useEffect(() => {
    console.log(isLoggedIn);
  }, [cookies.sessionId, isLoggedIn]);

  const deleteCookiesOnLogOut = () => {
    setCookie("sessionId", "");
    setIsLoggedIn("");
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          !isLoggedIn ? (
            <MainPage setIsLoggedIn={setIsLoggedIn} />
          ) : (
            <Navigate replace to="/search" />
          )
        }
      />
      <Route
        path="/search"
        element={
          isLoggedIn ? (
            <button onClick={deleteCookiesOnLogOut}>hello</button>
          ) : (
            <Navigate replace to="/" />
          )
        }
      />
    </Routes>
import { useState } from "react";
import OneCountryOneIndicator from "./components/OneCountryOneIndicator";

function App() {
  const [selectedCountries, setSelectedCountries] = useState();
  const [selectedIndicator, setSelectedIndicator] = useState();
  const [selectedYear, setSelectedYear] = useState();

  function getSelectedCountries(countries) {
    setSelectedCountries(countries);
    console.log(countries);
  }

  function getSelectedIndicators(indicator) {
    setSelectedIndicator(indicator);
    console.log(indicator);
  }

  function getSelectedYear(year) {
    setSelectedYear(year);
    console.log(year);
  }

  return (
    <div className="App">
      <header className="App-header">
        {/* <Search
          getSelectedCountries={getSelectedCountries}
          getSelectedIndicators={getSelectedIndicators}
          getSelectedYear={getSelectedYear}
        /> */}
        <OneCountryOneIndicator country={"Albania"} indicator={"Indicator"} />
      </header>
    </div>
  );
}

export default App;
