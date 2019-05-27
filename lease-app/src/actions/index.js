import leaseApi from "../apis/leaseApi";
import _ from "lodash";

export const fetchLeases = () => async dispatch => {
	const response = await leaseApi.get("/leases");
	dispatch({ type: "FETCH_LEASES", payload: response.data });
};

export const fetchLeaseInfo = leaseId => async dispatch => {
	const response = await leaseApi.get(`/leases/${leaseId}`);
	dispatch({ type: "FETCH_LEASE_INFO", payload: response.data });
};
