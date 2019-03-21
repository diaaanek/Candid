import React, { Component } from "react";
import Card from "react-toolbox/lib/card/Card";
import CardText from "react-toolbox/lib/card/CardText";

import Flashcards from "./Flashcards";

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
          <h1>Hiiiii</h1>
          <button className="Main-button"> Hi </button>
        </div>
      </div>
    );
  }
}

export default Study;
