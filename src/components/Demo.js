import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { Link, BrowserRouter as Router } from "react-router-dom";
import * as routes from "../constants/routes";

const styles = {
  card: {
    maxWidth: 600,
    maxHeight: 325,
    marginLeft: 30,
    position: "relative"
  },
  media: {
    // height: 100,
    margin: 0,
    height: 0,
    paddingTop: "56.25%"
  },
  overlay: {
    position: "absolute",
    top: "20px",
    left: "20px",
    color: "black",
    backgroundColor: "white"
  }
};

function MediaCard(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia>
          <img
            className={classes.media}
            src="https://cdn3.iconfinder.com/data/icons/luchesa-vol-9/128/Html-512.png"
          />

          <div style={classes.overlay}>
            <h4 style={{ fontSize: 23, display: "inline-block" }}>
              Javascript Coding Challenges
            </h4>
            <p style={{ fontSize: 13 }}>
              A series of community curated Javascript Coding Challenges to
              practice and learn from.{" "}
            </p>
          </div>
        </CardMedia>
      </CardActionArea>
      <CardActions style={{ justifyContent: "center" }}>
        <Link to={routes.CODE}>
          <button className="start">Start</button>
        </Link>{" "}
      </CardActions>
    </Card>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MediaCard);
