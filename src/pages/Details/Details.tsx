import { Button, CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Additional from '../../components/Additional/Additional';
import { selectAdditionals, selectCoffees } from '../../store/coffee/coffee.selector';
import { createOrder, fetchAdditionals } from '../../store/coffee/coffee.slice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { selectLoading } from '../../store/loading/loading.selector';
import useStyles from "./Details.styles";

interface Params {
    id: string;
}

const Details = () => {
    const { id } = useParams<Params>();
    const [disable, setDisable] = useState(true);
    const [addtn, setAddtn] = useState<String>();
    const additionals = useAppSelector(selectAdditionals);
    const loading = useAppSelector(selectLoading);
    const coffees = useAppSelector(selectCoffees);
    const dispatch = useAppDispatch();

    const getAdditional = (item: React.ChangeEvent<HTMLInputElement>): void => {
        setAddtn(item.target.value);
        setDisable(false);
    }

    const coffee = coffees.filter(item => item.id === id);
    const additional = additionals.filter(item => item.name === addtn && addtn);
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
            img: coffee[0].img,
        }));
    }

    const classes = useStyles();

    return (
        <div className={classes.details}>
            <div>
                <div className={classes.heading}>Coffee: {coffee[0].name} {coffee[0].price} $</div>
                <div className={classes.image}>
                    <img src={coffee[0].img} alt="coffee" />
                </div>
            </div>
            <div>
                {loading[fetchAdditionals.type] === "PROGRESS" && <CircularProgress />}
                <div className={classes.subheading}>Additional: {addtn}</div>
                <div className={classes.additionals}>
                    {loading[fetchAdditionals.type] === "SUCCESS" && 
                        additionals.map((item, index) => (
                            <div key={index}>
                                <Additional 
                                    name={item.name} 
                                    price={item.price}
                                    getAdditional={getAdditional}
                                />
                                <br />
                            </div>
                    ))}
                </div>
                <div className={classes.heading}>Total pice: {totalPrice} $</div>
                <Button sx={{ mt: 2 }} variant="contained" disabled={disable} onClick={handleOrder}>
                    Add to order
                </Button>
            </div>
        </div>
    )
}

export default Details;
