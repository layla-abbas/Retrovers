import React from 'react';

const Board = ({ cells, onClick }) => {
  return (
    <div className="board" style={{display:' grid' ,  gridTemplateColumns: '1fr 1fr 1fr',
      gridTemplateRows: '1fr 1fr 1fr',
    }}>
      {cells.map((cell, index) => (
        <button key={index} className="tictac-square" onClick={() => onClick(index)}>
          {cell}
        </button>
      ))}
    </div>
  );
};

export default Board;