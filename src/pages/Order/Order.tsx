import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { selectOrders, selectTotalPrice } from '../../store/coffee/coffee.selector';
import { changeServing, getTotalPrice, postOrders, removeOrder } from '../../store/coffee/coffee.slice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import SendIcon from '@mui/icons-material/Send';
import useStyles from "./Order.styles";

const Order = () => {
    const orders = useAppSelector(selectOrders);
    const totalPrice = useAppSelector(selectTotalPrice);
    const dispatch = useAppDispatch();
    const [state, setState] = useState(false);
    const [serving, setServing] = useState("Here");

    useEffect(() => {
        dispatch(changeServing(serving));
    }, [dispatch, serving])

    useEffect(() => {
        dispatch(getTotalPrice());
    }, [dispatch, orders])

    const handleRemove = (id: string) => {
        dispatch(removeOrder(id));
    }

    const handlePost = () => {
        dispatch(postOrders());
        setState(true);
        setTimeout(() => {
            setState(false);
        }, 2000);
    }

    const classes = useStyles();
    return (
        <div>
            {   state && 
                <div className={classes.success}>
                    Your order is successfully sent, please wait a few minutes
                </div>
            }
            {
                orders.list.length ?
                <div>
                    {orders.list.map(order => (
                        <div className={classes.wrapper} key={order.id}>
                            <div className={classes.info}>
                                <div className={classes.name}>
                                    {order.name} with <span>{order.additional}</span>
                                </div>
                                <div className={classes.image}>
                                    <img src={order.img} alt="order" />
                                </div>
                            </div>
                            <div className={classes.more}>
                                <div className={classes.price}>Price: {order.price} $</div>
                                <span 
                                    className={classes.remove} 
                                    onClick={() => handleRemove(order.id)}
                                >
                                    remove from order
                                </span>
                            </div>
                        </div>
                    ))}
                    <h4>Total order price: {totalPrice} $</h4>
                    <div className={classes.serving}>
                        <label>
                            Here
                            <input 
                                type="radio" 
                                value="Here" 
                                name="serving" 
                                onChange={() => setServing("Here")}
                                checked
                            />
                        </label>
                        <label>
                            Takeaway
                            <input 
                                type="radio" 
                                value="Takeaway"
                                name="serving"
                                onChange={() => setServing("Takeaway")}
                            />
                        </label>
                    </div>
                    <Button sx={{ mt: 2 }} variant="contained" endIcon={<SendIcon />} onClick={handlePost}>
                        Заказать
                    </Button>
                </div> : 
                <div>
                    {!state && <h2>No orders</h2>}
                </div>
            }
        </div>
    )
}

export default Order;
