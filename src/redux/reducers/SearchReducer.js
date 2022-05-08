import { MAIN_SEARCH } from "../types";

const INITIAL_STATE = {
    list: []
}

const SearchReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        
        case MAIN_SEARCH:
            return {
                ...state,
				list: action.payload,
                
            };

        default:
            return state;
    }
}

export default SearchReducer;