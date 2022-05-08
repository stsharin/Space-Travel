import { MAIN_SEARCH } from "../types";

export const mainSearch = (data) => ({
	type: MAIN_SEARCH,
	payload: data,
});

export const fetchProducts = (searchKey) => {
	return async (dispatch) => {
		
		try{
			const res = await fetch(`https://api.spacexdata.com/v3/launches/?rocket_name=${searchKey}`)
			dispatch(mainSearch(await res.json()));
		}
		catch(e) {
			console.log(e);
		}
	};
  }