import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ICoffee {
    id: string,
    name: string,
    img: string,
    price: number,
}

interface IAdditional {
    name: string,
    price: number,
}

export interface IOrder {
    id: string,
    name: string,
    additional: string,
    img: string,
    price: number,
}

interface CoffeesState {
    coffees: ICoffee[];
    additionals: IAdditional[];
    orders: IOrder[],
    totalPrice: number,
}

const initialState: CoffeesState = {
    coffees: [],
    additionals: [],
    orders: [],
    totalPrice : 0,
};

export const coffeesSlice = createSlice({
    name: "coffees",
    initialState,
    reducers: {
        fetchCoffees: (state: CoffeesState) => {},
        fetchCoffeesSuccess: (state: CoffeesState, action: PayloadAction<ICoffee[]>) => {
            state.coffees = action.payload;
        },
        fetchAdditionals: (state: CoffeesState) => {},
        fetchAdditionalsSuccess: (state: CoffeesState, action: PayloadAction<IAdditional[]>) => {
            state.additionals = action.payload;
        },
        postOrders: (state: CoffeesState) => {},
        postOrdersSuccess: (state: CoffeesState, action: PayloadAction<IOrder[]>) => {
            state.orders = [];
        },
        createOrder: (state: CoffeesState, action: PayloadAction<IOrder>) => {
            const newOrder = action.payload;
            state.orders.some(order => order.id === newOrder.id)
            ? alert("Coffee has already been added to orders")
            : state.orders = [...state.orders, newOrder];
        },
        removeOrder: (state: CoffeesState, action: PayloadAction<string>) => {
            const newOrders = state.orders.filter(item => item.id !== action.payload);
            state.orders = [...newOrders];
        },
        getTotalPrice: (state: CoffeesState) => {
            const newTotal = state.orders.reduce((sum, item) => {
                return sum + item.price;
            }, 0);
            state.totalPrice = newTotal;
        }
    },
});

export const { 
    fetchCoffees, 
    fetchCoffeesSuccess, 
    fetchAdditionals, 
    fetchAdditionalsSuccess ,
    createOrder,
    removeOrder,
    getTotalPrice,
    postOrders,
    postOrdersSuccess
} = coffeesSlice.actions;

export default coffeesSlice.reducer;
