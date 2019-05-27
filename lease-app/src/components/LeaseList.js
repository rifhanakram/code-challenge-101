import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { fetchLeases } from "../actions";

class LeaseList extends Component {
	componentDidMount() {
		this.props.fetchLeases();
	}

	renderList() {
		return this.props.leases.map(lease => {
			return (
				<div className="item" key={lease.id}>
					<i className="large middle aligned icon user" />
					<div className="content">
						<div className="description">
							<h2> {lease.tenant} </h2> 
						</div>
						<Link to={`lease/${lease.id}`} className="ui button primary"> {lease.tenant} </Link>
					</div>
				</div>
			);
		});
	}

	render() {
		return (
			<div className="LeaseList ui relaxed divided list">
				{this.renderList()}
			</div>
		);
	}
}
const mapStateToProps = state => {
	console.log(state);
	return { leases: state.leases };
};
export default connect(
	mapStateToProps,
	{ fetchLeases }
)(LeaseList);
