import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';
import { selectOrders } from '../../store/coffee/coffee.selector';
import { useAppSelector } from '../../store/hooks';
import useStyles from "./Header.styles";

const Header = () => {

    const orders = useAppSelector(selectOrders);
    const classes = useStyles();
    return (
        <header>
            <AppBar position="static">
                <Toolbar className={classes.links}>
                    <Link className={classes.link} to="/">
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Best Coffee
                        </Typography>
                    </Link>
                    <Link className={classes.link} to="/order">
                        <Button color="inherit">
                            My orders {
                                orders.list.length > 0 &&
                                `(${orders.list.length})`
                            }
                        </Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </header>
    )
}

export default Header;
