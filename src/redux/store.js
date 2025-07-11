// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import reducers from './reducers/index'; // Ini akan mengimpor dari file yang sudah kita perbaiki

const store = configureStore({
  reducer: reducers,
});

export default store;