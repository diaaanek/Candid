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
    return <Flashcards />;
  }
}

export default Study;
