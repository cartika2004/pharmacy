import { ActionTypes } from "../contans/action-types";
const initialState = {
  products: [],
};


export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};


export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case "SELECTED_PRODUCT":
      return { ...state, ...payload };
    case "REMOVE_SELECTED_PRODUCT":
      return {}; // Kembalikan ke object kosong
    default:
      return state;
  }
};