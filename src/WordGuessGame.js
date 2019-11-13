import React from "react";

class WordGuessGame extends React.Component {
  state = {
    guessesLeft: 10,
    answer: [],
    guessedLetters: [],
    blanks: []
  };
  render() {
    return <h1>Hello World</h1>;
  }
}

export default WordGuessGame;
