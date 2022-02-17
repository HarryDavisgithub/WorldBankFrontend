import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import OneCountryOneIndicator from "./OneCountryOneIndicator";
import OneCountryOneIndicatorOneYear from "./OneCountryOneIndicatorOneYear";

function PageSelector(props) {
	function selectPage() {
		console.log(props.indicator);
		console.log(props.year);
		if (!props.country || !props.year || !props.indicator) {
			return <Navigate replace to="/search" />;
		} else if (props.country.length === 1 && props.indicator !== "All" && props.year === "All") {
			return <OneCountryOneIndicator country={props.country} indicator={props.indicator} />;
		} else if (props.country.length === 1 && props.indicator !== "All" && props.year !== "All") {
			return (
				<OneCountryOneIndicatorOneYear
					country={props.country}
					indicator={props.indicator}
					year={props.year}
				/>
			);
		}
	}

	return selectPage();
}

export default PageSelector;
