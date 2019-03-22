import React, { Component } from "react";
import Card from "react-toolbox/lib/card/Card";
import CardText from "react-toolbox/lib/card/CardText";
import CardActions from "react-toolbox/lib/card/CardActions";
import Button from "react-toolbox/lib/button/Button";
import IconMenu from "react-toolbox/lib/menu/IconMenu";

import "./Flashcard.css";

class Flashcard extends Component {
  render() {
    return (
      <Card className="Flashcard">
        Hiiii
        <IconMenu icon="more_vert" menuRipple className="Flashcard-menu" />
        <CardText>Question }</CardText>
        <CardActions className="Flashcard-actions">
          <Button icon="replay" label="Flip" onClick={null} />
        </CardActions>
      </Card>
    );
  }
}
export default Flashcard;
