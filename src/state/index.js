import { combineReducers } from 'redux'
import dateReducer from './reducer'

const reducers = combineReducers({
    x: dateReducer
});

export default reducers