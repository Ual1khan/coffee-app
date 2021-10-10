import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import Coffee from '../../components/Coffee/Coffee';
import styles from './Home.module.scss';
import { CircularProgress } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { selectLoading } from '../../store/loading/loading.selector';
import { selectCoffees } from '../../store/coffee/coffee.selector';
import { fetchCoffees } from '../../store/coffee/coffee.slice';


const Home = () => {
    const dispatch = useAppDispatch();
    const coffees = useAppSelector(selectCoffees);
    const loading = useAppSelector(selectLoading);

    useEffect(() => {
        dispatch(fetchCoffees())
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return (
        <div className={styles.list}>
            {loading[fetchCoffees.type] === "PROGRESS" && <CircularProgress />}
            {loading[fetchCoffees.type] === "SUCCESS" &&
                coffees.map((coffee) => (
                    <Link key={coffee.id} className={styles.link} to={`/details/${coffee.id}`}>
                        <Coffee img={coffee.img} name={coffee.name} price={coffee.price} />
                    </Link>)
            )}
        </div>
    )
}

export default Home;
