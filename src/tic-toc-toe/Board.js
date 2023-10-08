/** @format */

import React from "react";
import Cells from "./Cells";
import styled from "styled-components";
const BoardContainer = styled.div`
  margin: 25px;
  width: 500px;
  height: 500px;
  border: 1px solid #ccc;
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(9, 1fr);
`;
const Board = (props) => {
  return (
    <BoardContainer style={{ margin: "0 auto" }}>
      {props.cells.map((item, index) => (
        <>
          <Cells
            index={index}
            winningIndex={props.winningIndex}
            value={item}
            onClick={() => props.onClick(index)}
            key={index}
          />
        </>
      ))}
    </BoardContainer>
  );
};

export default Board;
