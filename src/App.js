import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import { Header, Sidebar } from "../src/components/";
import styled from "styled-components";

function App() {
	return (
		<div className="app">
			<Header />
			<AppBody>
				<Sidebar />
			</AppBody>
		</div>
	);
}

export default App;

const AppBody = styled.div`
	display: flex;
	height: 100vh;
`;
