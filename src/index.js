import React from "react";
import ReactDOM from "react-dom";
import WordGuessGame from "./WordGuessGame";
import "./styles.css";

function App() {
  return <WordGuessGame />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
