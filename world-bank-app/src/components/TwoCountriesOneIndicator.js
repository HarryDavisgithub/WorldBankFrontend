import React, { useState, useEffect, PureComponent } from "react";
import { Label, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Network from "../Network.js";
import Logo from "../assets/bank-logo.png";

export default function TwoCountriesOneIndicator(props) {
	const network = new Network();
	const [data, setData] = useState();

	useEffect(() => {
		(async () => {
			formatGraphData(
				await network.getTwoCountriesIndicatorInfo(
					props.countries[0],
					props.countries[1],
					props.indicator
				)
			);
		})();
	}, []);

	function formatGraphData(d) {
		let result = [];
		for (let i = 0; i < d.length - 1; i++) {
			if (d[i].Country !== d[i + 1].Country) {
				result.push({
					Year: d[i].Year,
					[d[i].Country]: d[i].Value,
					[d[i + 1].Country]: d[i + 1].Value,
				});
				i++;
			} else {
				result.push({
					Year: d[i].Year,
					[d[i].Country]: d[i].Value,
				});
			}
		}
		setData(result);
	}

	function getGraph() {
		if ("response" in data) {
			return <p>Please choose a different country and indicator combination.</p>;
		} else {
			return (
				<Container className="py-5">
					<h2 className="align-items-center">
						{props.countries[0]}, {props.countries[1]}
					</h2>
					<h4>{props.indicator}</h4>
					<br />
					<LineChart
						width={1150}
						height={400}
						data={data}
						margin={{
							top: 5,
							right: 0,
							left: 50,
							bottom: 25,
						}}
					>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis dataKey="Year">
							{/* <Label value="Year" position="insideBottom" offset={-20} /> */}
						</XAxis>
						<YAxis />
						<Tooltip />
						<Legend />
						<Line
							type="monotone"
							dataKey={props.countries[0]}
							stroke="#8884d8"
							// activeDot={{ r: 8 }}
						/>
						<Line type="monotone" dataKey={props.countries[1]} stroke="#82ca9d" />
					</LineChart>
				</Container>
			);
		}
	}

	return (
		<Container className="py-4">
			<header className="border-bottom pb-3 mb-4">
				<Navbar>
					<Container>
						<Navbar.Brand href="/">
							<img src={Logo} height={50} alt="world-bank-logo" />{" "}
							<Button variant="primary">Search</Button>{" "}
							<Button variant="primary">History</Button>
						</Navbar.Brand>
					</Container>
					<Button variant="primary" className="text-nowrap">
						Log Out
					</Button>
				</Navbar>
			</header>
			<div className="mb-4 bg-light rounded-3">{data ? getGraph() : <p>Loading...</p>}</div>
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
