import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
    links: {
        width: "768px",
        margin: "0 auto",
        display: "flex",
        justifyContent: "space-between",
    },
    link: {
        textDecoration: "none",
        color: "#FFF",
    },
}));

export default useStyles;
