import React from "react";
import styled from "styled-components";

const Cells = (props) => {
  const isWinning = props?.winningIndex?.includes(props.index);
  return (
    <>
      <CellContainer isCellWinning={isWinning} onClick={props.onClick}>
        {props.value}
      </CellContainer>
    </>
  );
};
const CellContainer = styled.div`
  border: 2px solid blue;
  cursor: pointer;
  font-size: 36px;
  background-color: ${(props) => (props.isCellWinning ? "red" : "")};
`;
export default Cells;
