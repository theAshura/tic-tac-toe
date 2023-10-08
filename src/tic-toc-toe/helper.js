
export function calculateWinner(cells, rowCount, colCount, winLength) {
  // Hàm kiểm tra người chiến thắng dựa trên kích thước bảng và độ dài để thắng
  let winningIndexes = [];
  function checkLine(a, b, c) {
    if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
      // Nếu đường thắng được tìm thấy, thêm các index vào mảng winningIndexes
      winningIndexes = [a, b, c];
      localStorage.setItem("winning", winningIndexes);
      localStorage.setItem("winning", JSON.stringify(winningIndexes));
    }
    return cells[a] && cells[a] === cells[b] && cells[a] === cells[c];
  }

  for (let row = 0; row < rowCount; row++) {
    for (let col = 0; col < colCount; col++) {
      const index = row * colCount + col;

      if (cells[index]) {
        // Kiểm tra hàng ngang
        if (
          col <= colCount - winLength &&
          checkLine(index, index + 1, index + winLength - 1)
        ) {
          return cells[index];
        }

        // Kiểm tra hàng dọc
        if (
          row <= rowCount - winLength &&
          checkLine(index, index + colCount, index + (winLength - 1) * colCount)
        ) {
          return cells[index];
        }

        // Kiểm tra đường chéo xuôi
        if (
          col <= colCount - winLength &&
          row <= rowCount - winLength &&
          checkLine(
            index,
            index + colCount + 1,
            index + (winLength - 1) * (colCount + 1)
          )
        ) {
          return cells[index];
        }

        // Kiểm tra đường chéo ngược
        if (
          col >= winLength - 1 &&
          row <= rowCount - winLength &&
          checkLine(
            index,
            index + colCount - 1,
            index + (winLength - 1) * (colCount - 1)
          )
        ) {
          return cells[index];
        }
      }
    }
  }

  return null;
}
