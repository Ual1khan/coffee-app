import { RootState } from "../store";

export const selectCoffees = (state: RootState) => state.coffees.coffees;

export const selectAdditionals = (state: RootState) => state.coffees.additionals;

export const selectOrders = (state: RootState) => state.coffees.orders;

export const selectTotalPrice = (state: RootState) => state.coffees.totalPrice;
