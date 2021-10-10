import React, { useEffect } from 'react'
import { selectOrders, selectTotalPrice } from '../../store/coffee/coffee.selector';
import { getTotalPrice, postOrders, removeOrder } from '../../store/coffee/coffee.slice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

const Order = () => {
    const orders = useAppSelector(selectOrders);
    const totalPrice = useAppSelector(selectTotalPrice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getTotalPrice());
    }, [dispatch, orders])

    const handleRemove = (id: string) => {
        dispatch(removeOrder(id));
    }

    return (
        <div>
            {
                orders.length ?
                <div>
                    {orders.map(order => (
                        <div key={order.id}>
                            <h2>{order.name}</h2> with <span>{order.additional}</span>
                            <h3>price: {order.price} $</h3>
                            <span onClick={() => handleRemove(order.id)}>remove from order</span>
                            <br />
                        </div>
                    ))}
                    <h4>Total price: {totalPrice}</h4>
                    <button onClick={() => dispatch(postOrders())}>Заказать</button>
                </div> : 
                <div>
                    <h2>
                        No orders :(
                    </h2>
                </div>
            }
        </div>
    )
}

export default Order;
