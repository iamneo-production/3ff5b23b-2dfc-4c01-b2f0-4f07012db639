import React from "react";
import "./styles.css";

import Logout from "./Logout";
import Header from "./Header";

import BookAdd from "./BookAdd";
import BookView from "./BookView";
import BookEdit from "./BookEdit";
import { Route, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    display: ""
  }
});


export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Header />
      <Switch>
        
        <Route exact path="/BookAdd" render={props => <BookAdd {...props} />} />
        <Route exact path="/BookView" render={props => <BookView {...props} />} />
        <Route exact path="/BookEdit" render={props => <BookEdit {...props} />} />
        
      </Switch>
    </div>
  );
}
