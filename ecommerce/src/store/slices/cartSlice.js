import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        total: 0,
    },
    reducers: {
        addToCart(state, action) {
            const existing = state.items.find(i => i.id === action.payload.id);
            if (existing) {
                existing.quantity += 1;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
            state.total += action.payload.price;
        },
        removeFromCart(state, action) {
            const item = state.items.find(i => i.id === action.payload);
            if (!item) return;
            state.total -= item.price * item.quantity;
            state.items = state.items.filter(i => i.id !== action.payload);
        },
        incrementQuantity(state, action) {
            const item = state.items.find(i => i.id === action.payload);
            if (item) {
                item.quantity += 1;
                state.total += item.price;
            }
        },
        decrementQuantity(state, action) {
            const item = state.items.find(i => i.id === action.payload);
            if (item) {
                if (item.quantity > 1) {
                    item.quantity -= 1;
                    state.total -= item.price;
                } else {
                    state.total -= item.price;
                    state.items = state.items.filter(i => i.id !== action.payload);
                }
            }
        }
    }
});

export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;