import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
    list: {
        padding: "20px 0",
        width: "768px",
        margin: "0 auto",
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
    },
    link: {
        textDecoration: "none",
    },
}));

export default useStyles;
