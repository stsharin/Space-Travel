import { MAIN_SEARCH } from "../types";

const INITIAL_STATE = {
    // list: [],
    searchKey: ""
}

const SearchReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        
        case MAIN_SEARCH:
            return {
                ...state,
				searchKey: action.payload,
            };

        default:
            return state;
    }
}

export default SearchReducer;