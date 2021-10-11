import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
    card: {
        marginTop: "35px",
    },
    area: {
        "&:hover": {
            transform: "scale(1.1)",
        },
    },
}));

export default useStyles;
