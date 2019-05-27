import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchLeaseInfo } from "../actions";

class LeaseInfo extends Component {
	componentDidMount() {
		console.log(this.props.match.params.id);
		this.props.fetchLeaseInfo(this.props.match.params.id);
	}

	render() {
		return (
			<div className="LeaseInfo ui relaxed divided list">
				
			</div>
		);
	}
}
const mapStateToProps = state => {
	console.log(state.leaseInfo);
	return { lease: state.leaseInfo };
};
export default connect(
	mapStateToProps,
	{ fetchLeaseInfo }
)(LeaseInfo);
