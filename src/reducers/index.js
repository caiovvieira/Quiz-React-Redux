import { combineReducers } from 'redux'

import indexReducer from './indexReducer'
import pointReducer from './pointReducer';
import messageReducer from './messageReducer';

const allReducers = combineReducers({
    point: pointReducer,
    message: messageReducer,
    index: indexReducer,
})

export default allReducers