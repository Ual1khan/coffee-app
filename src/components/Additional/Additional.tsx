import React from 'react'
import useStyles from "./Additional.styles";

interface Props {
    name: string,
    price: number,
    getAdditional: (item: React.ChangeEvent<HTMLInputElement>) => void;
}

const Additional = ({name, price, getAdditional}: Props) => {
    const addName = name.toUpperCase();
    const classes = useStyles();
    return (
        <>
            <label className={classes.name}>{addName} <span>{price}$</span></label>
            <input
                type="radio" 
                value={name}
                name="add"
                onChange={getAdditional}
            />
            <br />
        </>
    )
}

export default Additional;
