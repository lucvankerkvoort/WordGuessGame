import React from "react";
import { bands } from "../Components/artists";

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
  winner;

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

    let answerString = this.state.answer.join("");
    this.winner = bands[answerString];

    console.log(answerString);

    const letters = this.guessed.toString();
    this.setState({
      blanks: correctLetters,
      guessedLetters: letters
    });
    console.log(this.winner);
    if (this.state.blanks.indexOf("-") === -1) {
      alert("You win!");
      this.win = true;
      this.reset();
    } else if (this.guessesLeft === 0) {
      alert("You Lose!!");
      this.reset();
    }
  };

  reset = () => {
    alert("i Run");
    const options = Object.keys(bands).splice("");
    const randomWord = options[Math.floor(Math.random() * options.length)];
    const selectedWord = randomWord.toLowerCase().split("");

    let blankWord = [];
    for (let i = 0; i < selectedWord.length; i++) {
      blankWord.push("-");
    }

    this.guessed = [];
    this.message = "";
    this.guessesLeft = 10;
    this.win = false;
    this.winner = "";

    this.setState({
      answer: selectedWord,
      blanks: blankWord,
      guessedLetters: []
    });
    console.log(this.state.blanks);
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
        {this.win ? null : null}
      </div>
    );
  }
}

export default WordGuessGame;
