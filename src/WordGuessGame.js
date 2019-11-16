import React from "react";
import { bands } from "./artists";
import { object } from "prop-types";

class WordGuessGame extends React.Component {
  state = {
    answer: [],
    guessedLetters: [],
    blanks: []
  };

  guessed = [];
  message = "";
  guessesLeft = 10;
  win = false;
  indexNumber;

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
    if (this.guessed.indexOf(input) === -1) {
      this.guessed.push(input);
      this.message = "";
    } else {
      this.guessesLeft++;
      this.message = "You already used that letter, try another";
    }

    if (answer.indexOf(input) > 0) {
      console.log("i run");
    } else {
      this.guessesLeft--;
    }

    let winner = this.state.answer.join("");
    this.indexNumber = bands.indexOf(winner);

    if (this.state.blanks.indexOf("-") === -1) {
      alert("You win!");
      this.win = true;
    } else if (this.guessesLeft === 0) {
      alert("You Lose!!");
    }

    const letters = this.guessed.toString();
    this.setState({
      blanks: correctLetters,
      guessedLetters: letters
    });
  };
  render() {
    return (
      <div className="wordguessgame">
        <div className="scores">
          <h1>{this.state.blanks}</h1>
          <h1>Guesses Left: {this.guessesLeft}</h1>
          <h1>Guessed Letters: {this.state.guessedLetters}</h1>
          <h1>{this.message}</h1>
        </div>
        {this.win ? (
          <iframe
            width="560"
            height="315"
            src={bands[this.indexNumber].youtube}
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        ) : null}
      </div>
    );
  }
}

export default WordGuessGame;
