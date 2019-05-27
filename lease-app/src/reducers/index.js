import { combineReducers } from "redux";
import leasesReducer from "./leasesReducer";
import leaseInfoReducer from "./leaseInfoReducer";

export default combineReducers({
	leases: leasesReducer,
	leaseInfo: leaseInfoReducer
});
