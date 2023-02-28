import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { Item } from "../constant/item";

export type CartItem = Item & {
  qty: number;
};

type Cart = CartItem[];

export interface CartStateType {
  isCartOpen: boolean;
  cart: Cart;
}

const initialState: CartStateType = {
  isCartOpen: false,
  cart: [],
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<Item>) {
      const foundItem = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (foundItem) {
        foundItem.qty += 1;
      } else {
        state.cart.push({ ...action.payload, qty: 1 });
      }
    },
    removeItem(state, action: PayloadAction<Item>) {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
    increaseAmount(state, action: PayloadAction<Item>) {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          item.qty++;
        }
        return item;
      });
    },
    decreaseAmount(state, action: PayloadAction<Item>) {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload.id && item.qty > 1) {
          item.qty--;
        }
        return item;
      });
    },
    toggleCart(state) {
      state.isCartOpen = !state.isCartOpen;
    },
  },
});

export const selectCart = (state: RootState) => state.cart.cart;
export const selectIsCartOpen = (state: RootState) => state.cart.isCartOpen;

export const {
  addItem,
  removeItem,
  increaseAmount,
  decreaseAmount,
  toggleCart,
} = CartSlice.actions;

export default CartSlice.reducer;
