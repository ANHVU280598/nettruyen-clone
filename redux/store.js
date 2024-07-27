// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './someReducer';


const store = configureStore({
  reducer: rootReducer,
});

export default store;