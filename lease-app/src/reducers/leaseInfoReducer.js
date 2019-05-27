export default (state = [], action) => {
	switch (action.type) {
		case "FETCH_LEASE_INFO":
			return action.payload;
		default:
			return state;
	}
};
