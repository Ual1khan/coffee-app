import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';
import { selectOrders } from '../../store/coffee/coffee.selector';
import { useAppSelector } from '../../store/hooks';
import styles from './Header.module.scss';


const Header = () => {

    const orders = useAppSelector(selectOrders);
    return (
        <header>
            <AppBar position="static">
                <Toolbar className={styles.links}>
                    <Link className={styles.link} to="/">
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Best Coffee
                        </Typography>
                    </Link>
                    <Link className={styles.link} to="/order">
                        <Button color="inherit">
                            My orders {
                                orders.length > 0 &&
                                `(${orders.length})`
                            }
                        </Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </header>
    )
}

export default Header;
