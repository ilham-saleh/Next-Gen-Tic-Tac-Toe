import React from 'react'

const Reset = ({gameState, GameState, onHandleReset}) => {
    if (gameState === GameState.inProgress) {
        return
    }
  return (
    <div className='btn-container'><button onClick={onHandleReset} className='reset-button'>Play Again</button></div>
  )
}

export default Reset