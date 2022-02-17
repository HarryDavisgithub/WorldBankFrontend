import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Routes, Route, Navigate, Link } from "react-router-dom";

import Network from "../Network.js";
import Logo from "../assets/bank-logo.png";

import "antd/dist/antd.css";
import { Select } from "antd";

export default function Search(props) {
	const network = new Network();
	const [countries, setCountries] = useState();
	const [indicators, setIndicators] = useState();
	const [selectedCountries, setSelectedCountries] = useState([]);
	const [selectedIndicator, setSelectedIndicator] = useState("All");
	const [selectedYear, setSelectedYear] = useState("All");

	const { Option } = Select;

	useEffect(() => {
		(async () => {
			setCountries(await network.getCountries());
			setIndicators(await network.getIndicators());
		})();
	}, []);

	function createYearsList() {
		let key = 0;
		let arr = [];
		for (let i = 2015; i >= 1960; i--) {
			key++;
			arr.push(
				<Select.Option key={key} value={i.toString()}>
					{i.toString()}
				</Select.Option>
			);
		}
		return arr;
	}

	function createIndicatorList() {
		return indicators.map((indicator, key) => (
			<Select.Option key={key} value={indicator}>
				{indicator}
			</Select.Option>
		));
	}

	function returnSelection(e) {
		// e.preventDefault();
		props.getSelectedCountries(selectedCountries);
		props.getSelectedIndicators(selectedIndicator);
		props.getSelectedYear(selectedYear);
	}

	function handleCountriesChange(country) {
		setSelectedCountries(country);
	}

	function getCountrySelect(e) {
		return (
			<div>
				<Form.Label>Select a country</Form.Label>
				<Select
					dropdownStyle={{ minWidth: "20%" }}
					style={{ minWidth: "100%" }}
					mode="multiple"
					placeholder="Please select up to two countries"
					onChange={handleCountriesChange}
				>
					{countries.map((item) => (
						<Option
							disabled={
								selectedCountries.length > 1
									? selectedCountries.includes(item)
										? false
										: true
									: false
							}
							key={item}
						>
							{item}
						</Option>
					))}
				</Select>
			</div>
		);
	}

	function handleIndicatorChange(indicator) {
		setSelectedIndicator(indicator);
	}

	function getIndicatorSelect(e) {
		return (
			<div>
				<Form.Label>Select a indicator</Form.Label>
				<Select
					className="search-select"
					showSearch
					dropdownStyle={{ minWidth: "50%" }}
					style={{ minWidth: "100%" }}
					placeholder="Select a indicator"
					optionFilterProp="children"
					onChange={handleIndicatorChange}
					filterOption={(input, option) =>
						option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
					}
				>
					<Select.Option value="All">All</Select.Option>
					{createIndicatorList()}
				</Select>
			</div>
		);
	}

	function handleYearChange(year) {
		setSelectedYear(year);
	}

	function getYearSelect(e) {
		return (
			<div>
				<Form.Label>Select a year</Form.Label>

				<Select
					showSearch
					placeholder="Select a year"
					style={{ minWidth: "100%" }}
					optionFilterProp="children"
					onChange={handleYearChange}
					filterOption={(input, option) =>
						option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
					}
				>
					{" "}
					<Select.Option value="All">All</Select.Option>
					{createYearsList()}
				</Select>
			</div>
		);
	}

	return (
		<Container className="py-4">
			<header className="border-bottom pb-3 mb-4">
				<Navbar>
					<Container>
						<Navbar.Brand href="/">
							<img src={Logo} height={50} alt="world-bank-logo" />
						</Navbar.Brand>
					</Container>
				</Navbar>
			</header>
			<div className="p-5 mb-4 bg-light rounded-3">
				<Container className="py-5">
					{countries && indicators ? (
						<div className="selection-bar">
							{getCountrySelect()}
							{getIndicatorSelect()}
							{getYearSelect()}
							<Link to="/page-selection">
								<Button
									variant="primary"
									type="submit"
									onClick={returnSelection}
									className="bar-item search-button"
								>
									Submit
								</Button>
							</Link>
						</div>
					) : (
						<div className="spinner-border" role="status">
							<span className="sr-only">Loading...</span>
						</div>
					)}
				</Container>
			</div>
			<Container>
				<footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
					<p className="col-md-4 mb-0 text-muted">© 2022 Team Delta</p>
					<div className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
						<img className="bi me-2" height="32" src={Logo} alt="world-bank-logo"></img>
					</div>
				</footer>
			</Container>
		</Container>
	);
}
