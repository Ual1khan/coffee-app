import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { selectAdditionals, selectCoffees } from '../../store/coffee/coffee.selector';
import { createOrder, fetchAdditionals } from '../../store/coffee/coffee.slice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { selectLoading } from '../../store/loading/loading.selector';


interface Params {
    id: string;
}

const Details = () => {
    const { id } = useParams<Params>();
    const [radio, setRadio] = useState("");
    const additionals = useAppSelector(selectAdditionals);
    const loading = useAppSelector(selectLoading);
    const coffees = useAppSelector(selectCoffees);
    const dispatch = useAppDispatch();

    const getAdditional = (item: React.ChangeEvent<HTMLInputElement>): void => {
        setRadio(item.target.value);
    }

    const coffee = coffees.filter(item => item.id === id);
    const additional = additionals.filter(item => item.name === radio && radio);
    const totalPrice = additional.length ? (coffee[0].price + additional[0].price) : coffee[0].price;

    useEffect(() => {
        dispatch(fetchAdditionals())
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    const handleOrder = () => {
        dispatch(createOrder({
            name: coffee[0].name,
            id: coffee[0].id,
            price: totalPrice,
            additional: additional[0].name,
            img: coffee[0].name,
        }));
    }
    return (
        <div>
            <h2>Coffee name: {coffee[0].name}</h2>
            <h3>{coffee[0].price}$</h3>
            <h3>Дополнение: {radio}</h3>
            {loading[fetchAdditionals.type] === "PROGRESS" && <CircularProgress />}
            {loading[fetchAdditionals.type] === "SUCCESS" && 
                additionals.map((item, index) => (
                    <div key={index}>
                        <label>{item.name} {item.price}$</label>
                        <input 
                            type="radio" 
                            value={item.name}
                            name="add"
                            onChange={getAdditional}
                        />
                        <br />
                    </div>
            ))}
            <div>
                Total pice: {totalPrice} $
            </div>
            <button onClick={handleOrder}>
                Add to order
            </button>
        </div>
    )
}

export default Details;
