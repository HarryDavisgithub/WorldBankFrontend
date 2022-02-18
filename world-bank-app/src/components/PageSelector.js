import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import OneCountryOneIndicator from "./OneCountryOneIndicator";
import OneCountryOneIndicatorOneYear from "./OneCountryOneIndicatorOneYear";
import TwoCountriesOneIndicator from "./TwoCountriesOneIndicator";

function PageSelector(props) {
	function selectPage() {
		if (!props.countries || !props.year || !props.indicator) {
			return <Navigate replace to="/search" />;
		} else if (
			props.countries.length === 1 &&
			props.indicator !== "All" &&
			props.year === "All"
		) {
			return <OneCountryOneIndicator countries={props.country} indicator={props.indicator} />;
		} else if (
			props.countries.length === 1 &&
			props.indicator !== "All" &&
			props.year !== "All"
		) {
			return (
				<OneCountryOneIndicatorOneYear
					countries={props.country}
					indicator={props.indicator}
					year={props.year}
				/>
			);
		} else if (
			props.countries.length === 2 &&
			props.indicator !== "All" &&
			props.year === "All"
		) {
			return (
				<TwoCountriesOneIndicator countries={props.countries} indicator={props.indicator} />
			);
		}
	}

	return selectPage();
}

export default PageSelector;
