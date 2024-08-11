import React, { useState, useEffect } from "react";
import createBoard from "./util/createBoard";
import Cell from "./Cell";
import { revealed } from "./util/reveal";
import Modal from "./Modal";
import home from '../../images/home2.png'
import { useNavigate } from "react-router-dom";

const Board = () => {
  const [grid, setGrid] = useState([]);
  const [nonMineCount, setNonMineCount] = useState(0);
  const [mineLocations, setMineLocations] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  // ComponentDidMount
  useEffect(() => {
    // Creating a board

    // Calling the function
    freshBoard();
  }, []);

  const freshBoard = () => {
    const newBoard = createBoard(10, 15, 15);
    setNonMineCount(10 * 15 - 15);
    setMineLocations(newBoard.mineLocation);
    setGrid(newBoard.board);
  };

  const restartGame = () => {
    freshBoard();
    setGameOver(false);
  };

  // On Right Click / Flag Cell
  const updateFlag = (e, x, y) => {
    // to not have a dropdown on right click
    e.preventDefault();
    // Deep copy of a state
    let newGrid = JSON.parse(JSON.stringify(grid));
    console.log(newGrid[x][y]);
    newGrid[x][y].flagged = true;
    setGrid(newGrid);
  };

  // Reveal Cell
  const revealCell = (x, y) => {
    if (grid[x][y].revealed || gameOver) {
      return;
    }
    let newGrid = JSON.parse(JSON.stringify(grid));
    if (newGrid[x][y].value === "X") {
      for (let i = 0; i < mineLocations.length; i++) {
        newGrid[mineLocations[i][0]][mineLocations[i][1]].revealed = true;
      }
      setGrid(newGrid);
      setGameOver(true);
    } else {
      let newRevealedBoard = revealed(newGrid, x, y, nonMineCount);
      setGrid(newRevealedBoard.arr);
      setNonMineCount(newRevealedBoard.newNonMinesCount);
      if (newRevealedBoard.newNonMinesCount === 0) {
        setGameOver(true);
      }
    }
  };
let navigate = useNavigate()

  function toHome(){
    navigate('/')
  }
  return (
    <div style={{ backgroundColor: "#667BC6", height: "100vh" }}>
      <h1
        style={{
          textAlign: "center",
          color: "#FDFFD2",
          padding: "20px 0px",
          textShadow: "2px 2px 5px black",
          fontSize:'50px'
        }}
      >
        Minesweeper
      </h1>
      <img className='tic-home' alt="" src={home} onClick={toHome}/>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {grid.map((singleRow, index1) => {
          return (
            <div style={{ display: "flex" }} key={index1}>
              {singleRow.map((singleBlock, index2) => {
                return (
                  <Cell
                    revealCell={revealCell}
                    details={singleBlock}
                    updateFlag={updateFlag}
                    key={index2}
                  />
                );
              })}
            </div>
          );
        })}
        {<Modal restartGame={restartGame} />}
      </div>
    </div>
  );
};

export default Board;
