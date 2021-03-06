import { FILTER_DETAILS } from "../types";

export const filterData = (data) => ({
	type: FILTER_DETAILS,
	payload: data,
});

export const filterRocketDetails = (upComingValue) => {
	return async (dispatch) => {
		try{
			dispatch(filterData(upComingValue));
		}
		catch(e) {
			console.log(e);
		}
	};
  }