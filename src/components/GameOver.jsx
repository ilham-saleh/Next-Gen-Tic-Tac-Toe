import React from 'react'

const GameOver = ({gameState, GameState}) => {
    // switch (gameState) {
    //     case GameState.inProgress:
    //     return <></>
    // }
    if (gameState === GameState.inProgress) {
        return <></>
    } else if (gameState === GameState.playerXWins){
        return <div className='game-over'>Player X Wins</div>
    } else if (gameState === GameState.playerOWins) {
        return <div className='game-over'>Player O Wins</div>
    } else if (gameState === GameState.draw) {
        return <div className='game-over'>It Is Draw</div>
    } else {
        return <></>
    }
}

export default GameOver