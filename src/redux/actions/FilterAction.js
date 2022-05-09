import { FILTER_DETAILS } from "../types";

export const filterData = (data) => ({
	type: FILTER_DETAILS,
	payload: data,
});

export const filterUpComings = (upComingValue) => {
	return async (dispatch) => {
		console.log("upcoming value", upComingValue);
		try{
			const res = await fetch(`https://api.spacexdata.com/v3/launches/?${upComingValue}`)
			// dispatch(filterData(await res.json()));
			console.log(await res.json());
		}
		catch(e) {
			console.log(e);
		}
	};
  }