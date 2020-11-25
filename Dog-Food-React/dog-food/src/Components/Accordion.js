import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "./Button";


const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

function handleDelete(titleVal) {
  console.log(titleVal.Data.title);
  fetch("https://lit-scrubland-80289.herokuapp.com/recipe/" + titleVal, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => res.text())
    .then((res) => console.log(res));
}

export default function SimpleAccordion(props) {
  const classes = useStyles();
  console.log(props.Data);
  if (props.Data == undefined) {
    return null;
  }

  return (
    <div className="container">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            {" "}
            {props.Data.title}{" "}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="container">
            <Typography> {props.Data.ingredients}</Typography>
            <Typography> {props.Data.tools}</Typography>
            <Typography> {props.Data.directions}</Typography>
            <Typography> {props.Data.additional_comments}</Typography>
            <button onClick={() => handleDelete(props)}>WOOF</button>
          </div>
        </AccordionDetails>
        //{" "}
      </Accordion>
    </div>
  );
}
// className={classes.root}>
