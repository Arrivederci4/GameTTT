import { useState } from "react";
//
export default function GameBoard({onSelectSquare,board}) {
//   const [gameBoard, setGameBoard] = useState(initialGameBoard);
//   //best to create copy and update it, instead of configure initial
//   function handleSelectSquare(rowI, colI) {
//     setGameBoard((prevGameBoard) => {
//       const updatedBoard = [...prevGameBoard.map((innerArray => [...innerArray])),];
//       updatedBoard[rowI][colI] = activeSymbol;
//       return updatedBoard;
//     });

//     onSelectSquare();
//   }
  //
  return (
    <ol id="game-board">
      {/* for every row  output a row and col*/}
      {board.map((row, rowI) => (
        <li key={rowI}>
          <ol>
            {/*map through columns */}
            {row.map((psymbol, colI) => (
              <li key={colI}>
                <button onClick={()=>onSelectSquare(rowI,colI)} disabled={psymbol!==null}>
                  {psymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
