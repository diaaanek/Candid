import React, { Component } from "react";
import "./Flashcard.css";

class Flashcard extends Component {
  render() {
    return (
      <div>
        {" "}
        <div className="deck-index"> {this.props.title}</div>;{" "}
      </div>
    );
  }
}
export default Flashcard;

// Each flashcard in the flashcards object store should have the shape
// {
//		id: integer,
//		front: string,
//		back: string,
//		status: flashcardStatus | null
// }
//
// The currentState object store maintains this data:
// {
//		currentCardId: integer,
//		nextReviewCardId: integer,
//		shuffledIds: array
