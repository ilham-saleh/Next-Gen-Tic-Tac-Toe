import React, { useState, useEffect } from "react";
import Board from "./Board";
import GameOver from "./GameOver";
import Reset from "./Reset";

import GameOverSound from "../sounds/gameOver.wav";
import ClickSound from "../sounds/click.wav";

const gameOverSound = new Audio(GameOverSound);
gameOverSound.volume = 0.2;

const clickSound = new Audio(ClickSound);
clickSound.volume = 0.5;

const PLAYER_X = "X";
const PLAYER_O = "O";

const winningCombinations = [
  // Rows
  { combination: [0, 1, 2], strikeClass: "strike-row-1" },
  { combination: [3, 4, 5], strikeClass: "strike-row-2" },
  { combination: [6, 7, 8], strikeClass: "strike-row-3" },

  // Columns
  { combination: [0, 3, 6], strikeClass: "strike-column-1" },
  { combination: [1, 4, 7], strikeClass: "strike-column-2" },
  { combination: [2, 5, 8], strikeClass: "strike-column-3" },

  // Diagonal
  { combination: [0, 4, 8], strikeClass: "strike-diagonal-1" },
  { combination: [2, 4, 6], strikeClass: "strike-diagonal-2" },
];

const GameState = {
  playerXWins: 0,
  playerOWins: 1,
  draw: 2,
  inProgress: 3,
};

const checkWinner = (tiles, setStrikeClass, setGameState) => {
  for (const { combination, strikeClass } of winningCombinations) {
    const tileValue1 = tiles[combination[0]];
    const tileValue2 = tiles[combination[1]];
    const tileValue3 = tiles[combination[2]];

    if (
      tileValue1 !== null &&
      tileValue1 === tileValue2 &&
      tileValue1 === tileValue3
    ) {
      setStrikeClass(strikeClass);

      if (tileValue1 === PLAYER_X) {
        setGameState(GameState.playerXWins);
      } else {
        setGameState(GameState.playerOWins);
      }
      return;
    }
  }

  const allTileValues = tiles.every((tile) => tile !== null);
  if (allTileValues) {
    setGameState(GameState.draw);
  }
};

const Tictactoe = () => {
  const [tiles, setTiles] = useState(Array(9).fill(null));
  const [playerTurn, setPlayerTurn] = useState(PLAYER_X);
  const [strikeClass, setStrikeClass] = useState();
  const [gameState, setGameState] = useState(GameState.inProgress);

  const handleTileClick = (index) => {
    if (gameState !== GameState.inProgress) {
      return;
    }

    if (tiles[index] !== null) {
      return;
    }

    const newTiles = [...tiles];
    newTiles[index] = playerTurn;
    setTiles(newTiles);

    if (playerTurn === PLAYER_X) {
      setPlayerTurn(PLAYER_O);
    } else {
      setPlayerTurn(PLAYER_X);
    }
  };

  useEffect(() => {
    checkWinner(tiles, setStrikeClass, setGameState);
  }, [tiles]);

  const handleReset = () => {
    setGameState(GameState.inProgress);
    setTiles(Array(9).fill(null));
    setPlayerTurn(PLAYER_X);
    setStrikeClass(null);
  };

  useEffect(() => {
    if (tiles.some((tile) => tile !== null)) {
      clickSound.play();
    }
  }, [tiles]);

  useEffect(() => {
    if (gameState !== GameState.inProgress) {
      gameOverSound.play();
    }
  });

  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <Board
        playerTurn={playerTurn}
        tiles={tiles}
        handleTileClick={handleTileClick}
        strikeClass={strikeClass}
      />
      <GameOver gameState={gameState} GameState={GameState} />
      <Reset
        gameState={gameState}
        GameState={GameState}
        onHandleReset={handleReset}
      />
    </div>
  );
};

export default Tictactoe;
