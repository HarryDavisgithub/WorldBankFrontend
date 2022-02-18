import "./App.css";
import Search from "./components/Search";
import "bootstrap/dist/css/bootstrap.min.css";
import MainPage from "./components/MainPage";
import { useCookies } from "react-cookie";
import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import OneCountryOneIndicator from "./components/OneCountryOneIndicator";
import PageSelector from "./components/PageSelector";

function App() {
  const [cookies, setCookie] = useCookies(["sessionId"]);
  const [isLoggedIn, setIsLoggedIn] = useState(cookies.sessionId);
  const [selectedCountries, setSelectedCountries] = useState();
  const [selectedIndicator, setSelectedIndicator] = useState();
  const [selectedYear, setSelectedYear] = useState();

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
        path="/page-selection"
        element={
          isLoggedIn ? (
            <PageSelector
              countries={selectedCountries}
              indicator={selectedIndicator}
              year={selectedYear}
              logOut={deleteCookiesOnLogOut}
            />
          ) : (
            <Navigate replace to="/" />
          )
        }
      />
      <Route
        path="/search"
        element={
          isLoggedIn ? (
            <>
              <Search
                getSelectedCountries={getSelectedCountries}
                getSelectedIndicators={getSelectedIndicators}
                getSelectedYear={getSelectedYear}
                logOut={deleteCookiesOnLogOut}
              />
            </>
          ) : (
            <Navigate replace to="/" />
          )
        }
      />
      <Route
        path="/OneCountryOneIndicator"
        element={
          isLoggedIn ? (
            <OneCountryOneIndicator
              country={"Albania"}
              indicator={"Indicator"}
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
