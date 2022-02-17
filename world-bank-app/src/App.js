import "./App.css";
import Search from "./components/Search";
import "bootstrap/dist/css/bootstrap.min.css";
import MainPage from "./components/MainPage";
import { useCookies } from "react-cookie";
import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import OneCountryOneIndicator from "./components/OneCountryOneIndicator";
import OneCountryOneIndicatorOneYear from "./components/OneCountryOneIndicatorOneYear";

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
    <Routes>
      <Route
        path="/"
        element={
          !isLoggedIn ? (
            <MainPage setIsLoggedIn={setIsLoggedIn} />
          ) : (
            <>
              <Navigate replace to="/search" />
            </>
          )
        }
      />
      <Route
        path="/search"
        element={
          isLoggedIn ? (
            <Search
              getSelectedCountries={getSelectedCountries}
              getSelectedIndicators={getSelectedIndicators}
              getSelectedYear={getSelectedYear}
            />
          ) : (
            <Navigate replace to="/" />
          )
        }
      />
    </Routes>
  );
}

export default App;
