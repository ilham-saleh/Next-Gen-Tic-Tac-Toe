import React from 'react'
import Tile from './Tile'
import Strike from './Strike'

const Board = ({tiles, handleTileClick, playerTurn, strikeClass}) => {
  return (
    <div className='board'>
        <Tile value={tiles[0]} onClick={() => handleTileClick(0)} playerTurn={playerTurn} className="right-border bottom-border"/>
        <Tile value={tiles[1]} onClick={() => handleTileClick(1)} playerTurn={playerTurn} className="right-border bottom-border"/>
        <Tile value={tiles[2]} onClick={() => handleTileClick(2)} playerTurn={playerTurn} className="bottom-border"/>
        <Tile value={tiles[3]} onClick={() => handleTileClick(3)} playerTurn={playerTurn} className="right-border bottom-border" />
        <Tile value={tiles[4]} onClick={() => handleTileClick(4)} playerTurn={playerTurn} className="right-border bottom-border" />
        <Tile value={tiles[5]} onClick={() => handleTileClick(5)} playerTurn={playerTurn} className="bottom-border" />
        <Tile value={tiles[6]} onClick={() => handleTileClick(6)} playerTurn={playerTurn} className="right-border" />
        <Tile value={tiles[7]} onClick={() => handleTileClick(7)} playerTurn={playerTurn} className="right-border" />
        <Tile value={tiles[8]} onClick={() => handleTileClick(8)} playerTurn={playerTurn}  />
        <Strike strikeClass={strikeClass} />
    </div>
  )
}

export default Board