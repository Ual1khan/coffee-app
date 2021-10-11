import React, { FC } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import useStyles from "./Coffee.styles";

interface Props {
    img: string,
    name: string,
    price: number,
}

const Coffee: FC<Props> = ({img, name, price}: Props) => {
    const classes = useStyles();
    return (
        <Card className={classes.card} sx={{ maxWidth: 220}}>
            <CardActionArea className={classes.area}>
                <CardMedia
                    component="img"
                    height="160"
                    image={img}
                    alt="coffee"
                />
                <CardContent>
                    <Typography gutterBottom variant="h4" component="div">
                        {name}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                        Price: $ {price}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default Coffee;
