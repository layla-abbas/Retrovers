import React from 'react';

const Board = ({ cells, onClick }) => {
  return (
    <div className="board" style={{display:' grid' ,  gridTemplateColumns: '1fr 1fr 1fr',
      gridTemplateRows: '1fr 1fr 1fr',
    }}>
      {cells.map((cell, index) => (
        <button key={index} className="square" style={{height:'150px' ,
         width:'150px' ,
          fontSize:'75px',
          border: '5px solid white' , 
          backgroundColor: 'transparent' , 
          color: '#BFFB4F', }}
           onClick={() => onClick(index)}>
          {cell}
        </button>
      ))}
    </div>
  );
};

export default Board;