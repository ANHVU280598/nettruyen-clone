// redux/rootReducer.js
import { combineReducers } from 'redux';
import csvDataReducer from './slice/csvDataSlice';

const rootReducer = combineReducers({
   csvData: csvDataReducer
});

export default rootReducer;