import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
    details: {
        display: "flex",
        width: "730px",
        margin: "0 auto",
        justifyContent: "space-around",
        marginTop: "20px",
    },
    image: {
        width: "360px",
        margin: "0 auto",
        marginTop: "10px",
        "& img": {
            width: "100%",
            borderRadius: "10%",
        }
    },
    heading: {
        fontSize: "26px",
        fontWeight: "bold",
        marginTop: "15px",
    },
    subheading: {
        width: "240px",
        margin: "0 auto",
        textAlign: "left",
        fontSize: "18px",
        fontWeight: "bold",
        marginTop: "20px",
    },
    additionals: {
        width: "240px",
        margin: "0 auto",
        textAlign: "left",
        marginTop: "30px",
    }
}));

export default useStyles;
