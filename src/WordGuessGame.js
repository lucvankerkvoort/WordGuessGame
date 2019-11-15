import React from "react";
import { bands } from "./artists";
import { object } from "prop-types";

class WordGuessGame extends React.Component {
  state = {
    guessesLeft: 10,
    answer: [],
    guessedLetters: [],
    blanks: []
  };
  guessed = [];
  componentDidMount() {
    document.addEventListener("keydown", this.game);
    const options = Object.keys(bands).splice("");
    const randomWord = options[Math.floor(Math.random() * options.length)];
    const selectedWord = randomWord.toLowerCase().split("");

    let blankWord = [];
    for (let i = 0; i < selectedWord.length; i++) {
      blankWord.push("-");
    }

    this.setState({ answer: selectedWord, blanks: blankWord });
  }

  game = e => {
    const { answer } = this.state;
    let input = e.key;
    let correctLetters = this.state.blanks;
    for (let i = 0; i < answer.length; i++) {
      if (input === answer[i]) {
        correctLetters[i] = answer[i];
      }
    }
    this.guessed.push(input);
    console.log("this.guessed", this.guessed);
    this.setState({ blanks: correctLetters, guessedLetters: this.guessed });
  };
  render() {
    console.log("answer", this.state.answer);
    return (
      <div>
        <h1>{this.state.blanks}</h1>
        <h1>Guesses Left: {this.state.guessesLeft}</h1>
        <h1>Guessed Letters: {this.state.guessedLetters}</h1>
      </div>
    );
  }
}

export default WordGuessGame;
