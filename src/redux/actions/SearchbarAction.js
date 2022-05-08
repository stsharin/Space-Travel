import { MAIN_SEARCH } from "../types";

export const mainSearch = (data) => ({
	type: MAIN_SEARCH,
	payload: data,
	
});

export const fetchProducts = (searchKey) => {
	console.log("fetched product")
	return async (dispatch) => {
		
		try{
			console.log("here")
			const res = await fetch(``)
			dispatch(mainSearch(await res.json()));
		}
		catch(e) {
			console.log(e);
		}
	};
  }