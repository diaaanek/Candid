import React, { Component } from "react";
import questions from "./questions.json";
import IconMenu from "react-toolbox/lib/menu/IconMenu";
import Flashcard from "./Flashcard";
import "./Flashcards.css";

import Button from "@material-ui/core/Button";

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
  constructor(props) {
    super(props);
    this.state = {
      number: Math.floor(Math.random() * questions.length)
    };
    this.updateNumber = () => {
      this.setState({ number: Math.floor(Math.random * questions.length) });
    };
  }

  renderQuestion() {
    return <Flashcard title={Object.keys(questions[this.state.number])} />;
  }

  render() {
    return (
      <div className="Main">
        <div className="container">
          <h1>Flashcard Category Title</h1>

          <div className="search-field">
            <img
              class="search"
              src="https://secret-springs-77868.herokuapp.com/assets/search-e6a6e8dd30432352df1fe74942f248b40893877b8fcfa6fe0c219c8489b216f9.svg"
            />{" "}
            Search Deck Component
            <input type="text" value="" />
          </div>

          <div class="flex-grid">
            <aside class="col sidebar">
              <h2>Study Decks</h2>
              <button className="button topic-btn">Topic </button>
              <p>
                <button className="button topic-btn">HTML </button>
              </p>
              <button className="button topic-btn">HTML </button>
              <p>
                <button className="button topic-btn">HTML </button>
              </p>
            </aside>

            <section class="col main">
              <h2>Flashcard Compent Goes Here</h2>
              <div>{this.renderQuestion()}</div>
              <br />
              <Button
                variant="contained"
                color="secondary"
                onClick={this.updateNumber}
              >
                New Question
              </Button>
            </section>
          </div>

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
