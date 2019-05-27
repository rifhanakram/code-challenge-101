import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import LeaseList from "./LeaseList";
import LeaseInfo from "./LeaseInfo";

class App extends Component {
	render() {
		return (
			<div className="App ui container">
				<BrowserRouter>
					<Route path="/" exact component={LeaseList}/>
					<Route path="/lease/:id" component={LeaseInfo} />
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
