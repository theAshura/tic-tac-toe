/** @format */

import React, { useEffect, useState } from "react";
import Board from "./Board";
import { calculateWinner } from "./helper";
import styled from "styled-components";
const Game = () => {
  const [board, setBoard] = useState(Array(81).fill(null));
  const [takeTurn, setTakeTurn] = useState(true);
  const winningIndex = JSON.parse(localStorage.getItem("winning"));
  const handleClick = (index) => {
    const boardCopy = [...board];
    if (winner || boardCopy[index]) return;
    boardCopy[index] = takeTurn ? "X" : "O";
    setBoard(boardCopy);
    setTakeTurn(!takeTurn);
  };
  const resetboard = () => {
    setBoard(Array(81).fill(null));
    setTakeTurn(true);
    localStorage.removeItem("winning");
  };
  useEffect(() => {
    resetboard();
  }, []);
  const winner = calculateWinner(board, 9, 9, 3);
  const winningLine = winner ? calculateWinner(board, 9, 9, 3) : null;
  return (
    <Container>
      <Board
        winningIndex={winningIndex}
        winningLine={winningLine}
        cells={board}
        onClick={handleClick}
      />
      <TextWinner>
        {winner ? `winner is ${!takeTurn ? `X` : `O`}` : ""}
      </TextWinner>

      <ButtonRetry onClick={resetboard}>Retry</ButtonRetry>
    </Container>
  );
};
const ButtonRetry = styled.button`
  margin-top: 2rem;
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;
const TextWinner = styled.div`
  text-align: center;
  font-size: 50px;
  color: #2c2c2c;
  letter-spacing: 0.05em;
  text-shadow: 4px 4px 0px #d5d5d5, 7px 7px 0px rgba(0, 0, 0, 0.2);
`;
const Container = styled.div`
  text-align: center;
`;
export default Game;
