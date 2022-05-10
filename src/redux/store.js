import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import SearchReducer from './reducers/SearchReducer';
import thunk from 'redux-thunk';
import FilterReducer from './reducers/FilterReducer';

const reducers = combineReducers({
    searchReducer: SearchReducer,
    filterReducer: FilterReducer,
});

const store = createStore(reducers, compose(applyMiddleware(thunk)));
export default store;
