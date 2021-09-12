import {
  ADD_TO_CART,
  CLEAR_CART,
  MINUS_CART_ITEM,
  PLUS_CART_ITEM,
  REMOVE_CART_ITEM,
} from '../types';

const initialState = {
  items: [],
  totalCard: 0,
  totalPrice: 0,
};

const getTotalPrice = (arr) => arr.reduce((sum, obj) => obj.price + sum, 0);

const cart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const currentPhoneItems = !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id].items, action.payload];

      const newItems = {
        ...state.items,
        [action.payload.id]: {
          items: currentPhoneItems,
          totalPrice: getTotalPrice(currentPhoneItems),
        },
      };

      const items = Object.values(newItems).map((obj) => obj.items);
      const allPhone = [].concat.apply([], items);
      const totalPrice = getTotalPrice(allPhone);

      return {
        ...state,
        items: newItems,
        totalCard: allPhone.length,
        totalPrice,
      };
    }

    case REMOVE_CART_ITEM: {
      const newItems = {
        ...state.items,
      };
      const currentTotalPrice = newItems[action.payload].totalPrice;
      const currentTotalCard = newItems[action.payload].items.length;

      delete newItems[action.payload];

      return {
        ...state,
        items: newItems,
        totalPrice: state.totalPrice - currentTotalPrice,
        totalCard: state.totalCard - currentTotalCard,
      };
    }

    case PLUS_CART_ITEM: {
      const newObjItems = [
        ...state.items[action.payload].items,
        state.items[action.payload].items[0],
      ];
      const newItems = {
        ...state.items,
        [action.payload]: {
          items: newObjItems,
          totalPrice: getTotalPrice(newObjItems),
        },
      };

      const items = Object.values(newItems).map((obj) => obj.items);
      const allPhone = [].concat.apply([], items);
      const totalPrice = getTotalPrice(allPhone);

      return {
        ...state,
        items: newItems,
        totalCard: allPhone.length,
        totalPrice,
      };
    }

    case MINUS_CART_ITEM: {
      const oldItems = state.items[action.payload].items;
      const newObjItems =
        oldItems.length > 1
          ? state.items[action.payload].items.slice(1)
          : oldItems;
      const newItems = {
        ...state.items,
        [action.payload]: {
          items: newObjItems,
          totalPrice: getTotalPrice(newObjItems),
        },
      };

      const items = Object.values(newItems).map((obj) => obj.items);
      const allPhone = [].concat.apply([], items);
      const totalPrice = getTotalPrice(allPhone);

      return {
        ...state,
        items: newItems,
        totalCard: allPhone.length,
        totalPrice,
      };
    }

    case CLEAR_CART: {
      return {
        items: {},
        totalPrice: 0,
        totalCard: 0,
      };
    }

    default:
      return state;
  }
};

export default cart;
