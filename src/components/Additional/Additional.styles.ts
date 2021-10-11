import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  name: {
    fontSize: "16px",
    fontStyle: "italic",
    "& span": {
        fontWeight: "bold"
    },
  },
});

export default useStyles;
