// src/redux/reducers/index.js
import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./productReducer"; // Impor reducer baru

const reducers = combineReducers({
  allProducts: productReducer, // Ganti nama key agar lebih jelas
  product: selectedProductReducer, // Tambahkan reducer baru dengan key 'product'
});

export default reducers;