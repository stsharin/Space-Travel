import { FILTER_DETAILS } from "../types";

const INITIAL_STATE = {
    filterValue: []
}

const FilterReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        
        case FILTER_DETAILS:
            return {
                ...state,
				filterValue: action.payload,
            };

        default:
            return state;
    }
}

export default FilterReducer;