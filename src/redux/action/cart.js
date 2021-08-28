import {
  ADD_TO_CART,
  CLEAR_CART,
  MINUS_CART_ITEM,
  PLUS_CART_ITEM,
  REMOVE_CART_ITEM,
} from '../types';

export const cartAddToPhone = (phoneObj) => ({
  type: ADD_TO_CART,
  payload: phoneObj,
});

export const clearCart = () => ({
  type: CLEAR_CART,
});

export const removeCartItem = (id) => ({
  type: REMOVE_CART_ITEM,
  payload: id,
});

export const plusCartItem = (id) => ({
  type: PLUS_CART_ITEM,
  payload: id,
});

export const minusItem = (id) => ({
  type: MINUS_CART_ITEM,
  payload: id,
});
