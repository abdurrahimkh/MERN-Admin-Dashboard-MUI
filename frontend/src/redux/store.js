import { configureStore } from '@reduxjs/toolkit';
import globalReducer from './globalReducer';
export const store = configureStore({
  reducer: {
    global: globalReducer,
  },
});
