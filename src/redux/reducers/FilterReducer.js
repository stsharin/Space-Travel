import { FILTER_DETAILS } from "../types";

const INITIAL_STATE = {
    list: []
}

const FilterReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        
        case FILTER_DETAILS:
            return {
                ...state,
				list: action.payload,
            };

        default:
            return state;
    }
}

export default FilterReducer;