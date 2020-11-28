import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MediaCapture from "./photoinput";
import { render } from "react-dom";

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
    };
  }
  // function makeStyles(theme)  {
  //   root: {
  //     display: "flex",
  //     flexWrap: "wrap",
  //   },
  //   textField: {
  //     marginLeft: theme.spacing(1),
  //     marginRight: theme.spacing(1),
  //     width: "25ch",
  //   },
  // };

  render() {
    // const classes = this.useStyles();
    return (
      <div>
        <form>
          <TextField
            id="standard-full-width"
            label="Title"
            style={{ margin: 8 }}
            placeholder="Recipe Title"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            // id="standard-full-width"
            label="Ingredients"
            style={{ margin: 8 }}
            placeholder="Enter Ingredients here seperated with commas"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            // id="margin-none"
            // defaultValue="Default Value"
            // className={classes.textField}
            // helperText="Some important text"
          />
          <TextField
            // id="standard-full-width"
            label="Ingredients"
            style={{ margin: 8 }}
            placeholder="Enter Ingredients here seperated with commas"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,}}
          />
          <TextField
            // id="standard-full-width"
            label="Ingredients"
            style={{ margin: 8 }}
            placeholder="Enter Ingredients here seperated with commas"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,}}
          />
          <div>
            <MediaCapture />
          </div>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
