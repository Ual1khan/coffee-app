import axios from "axios";

export const getAllCoffees = () => {
    return axios.get("https://my-json-server.typicode.com/ual1khan/demo/coffees");
};

export const getAllAdditionals = () => {
    return axios.get("https://my-json-server.typicode.com/ual1khan/demo/additionals");
};


export const postAllOrders = (orders: any) => {
    return axios.post("http://localhost:3000/orders", orders);
}
