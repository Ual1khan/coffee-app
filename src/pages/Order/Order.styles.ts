import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
    wrapper: {
        display: "flex",
        justifyContent: "space-between",
        margin: "0 auto",
        padding: "10px",
        width: "480px",
        border: "2px solid lightblue",
        borderRadius: "4%",
        marginTop: "20px",
    },
    info: {
        display: "flex",
        flexDirection: "column",
    },
    more: {
        display: "flex",
        flexDirection: "column", 
        justifyContent: "center",
        alignItems: "center",
        width: "220px", 
    },
    price: {
        fontSize: "26px",
        fontWeight: "bold",
    },
    remove: {
        textDecoration: "underline",
        color: "#D11A2A",
        cursor: "pointer",
        fontSize: "18px",
        marginTop: "45px",
    },
    name: {
        fontSize: "18px",
        fontWeight: "bold",
    },
    image: {
        width: "240px",
        marginTop: "8px",
        "& img": {
            width: "100%",
            borderRadius: "10%",
        }
    },
    serving: {
        width: "220px",
        margin: "0 auto",
        display: "flex",
        justifyContent: "space-around",
        fontSize: "24px",
        "& input[type='radio']": {
            transform: "scale(1.2)",
        },
    },
    success: {
        fontSize: "36px",
        fontWeight: "bold",
        color: "#03fc4e",
    },
}));

export default useStyles;
