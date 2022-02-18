import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import OneCountryOneIndicator from "./OneCountryOneIndicator";
import OneCountryOneIndicatorOneYear from "./OneCountryOneIndicatorOneYear";
import TwoCountriesOneIndicator from "./TwoCountriesOneIndicator";


function PageSelector(props) {
	function selectPage() {
		if (!props.country || !props.year || !props.indicator) {
			return <Navigate replace to="/search" />;
		} else if (props.country.length === 1 && props.indicator !== "All" && props.year === "All") {
			return <OneCountryOneIndicator country={props.country} indicator={props.indicator} />;
		} else if (props.country.length === 1 && props.indicator !== "All" && props.year !== "All") {
			return <OneCountryOneIndicatorOneYear country={props.country} indicator={props.indicator} year={props.year}/>
		} else if (props.country.length === 2 && props.indicator !== "All" && props.year === "All") {
			return <TwoCountriesOneIndicator countries={props.countries} indicator={props.indicator} />;

		}
	}

	return selectPage();
}

export default PageSelector;
