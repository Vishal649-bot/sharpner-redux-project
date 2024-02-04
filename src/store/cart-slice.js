import { createSlice } from "@reduxjs/toolkit";

createSlice({
  name: "cart",
  initialState: {
    item: [],
    totalQuantity: 0,
  },
  reducer: {
    addItemToCart(state, action) {
      const newitem = action.payload;
      const existingItem = state.item.find((item) => item.id === newitem.id);
      if (!existingItem) {
        state.item.push({
          itemId: newitem.id,
          price: newitem.price,
          quantity: 1,
          totalPrice: newitem.price,
          name: newitem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newitem.price;
      }
    },
    removeItemFromCart() {},
  },
});
