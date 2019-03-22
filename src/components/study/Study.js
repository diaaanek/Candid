import React, { Component } from "react";
import Card from "react-toolbox/lib/card/Card";
import CardText from "react-toolbox/lib/card/CardText";
import CardActions from "react-toolbox/lib/card/CardActions";

import IconMenu from "react-toolbox/lib/menu/IconMenu";
import Flashcard from "./Flashcard";
import "./Flashcards.css";

import { withStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

import "./Study.css";
// TO DO:
// CRUD for decks and flashcards
// Audio upload and playback
// Search Decks
// Filter Decks by language or author
// Animated flashcard view

class Study extends Component {
  render() {
    return (
      <div className="Main">
        <div class="deck-index group">
          <div className="search-field">
            <img
              class="search"
              src="https://secret-springs-77868.herokuapp.com/assets/search-e6a6e8dd30432352df1fe74942f248b40893877b8fcfa6fe0c219c8489b216f9.svg"
            />{" "}
            Search Deck Component
            <input type="text" value="" />
          </div>
          <h1>Flashcard Category Title</h1>
          <div className="Main-button">
            <Fab color="primary" aria-label="Add">
              <AddIcon />
            </Fab>
          </div>
        </div>
      </div>
    );
  }
}

export default Study;
