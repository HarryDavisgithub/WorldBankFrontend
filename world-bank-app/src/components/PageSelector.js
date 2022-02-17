import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import OneCountryOneIndicator from "./OneCountryOneIndicator";

function PageSelector(props) {
	function selectPage() {
		console.log(props.indicator);
		console.log(props.year);
		if (!props.country || !props.year || !props.indicator) {
			return <p>Please enter a search</p>;
		} else if (props.country.length === 1 && props.indicator !== "All" && props.year === "All") {
			return <OneCountryOneIndicator country={props.country} indicator={props.indicator} />;
		}
	}

	return selectPage();
}

export default PageSelector;
