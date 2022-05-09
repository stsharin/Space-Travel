import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import SearchReducer from './reducers/SearchReducer';
import thunk from 'redux-thunk';
import FilterReducer from './reducers/FilterReducer';

const reducers = combineReducers({
    searchReducer: SearchReducer,
    filterReducer: FilterReducer,
});

const store = createStore(reducers, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
export default store;
