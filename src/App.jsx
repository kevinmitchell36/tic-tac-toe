import { useState } from "react"
import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import Log from "./components/Log"
import { use } from "react"

function deriveActivePlayer(gameTurns) {
  let currentPlayer = 'X'
    if (prevTurns.length > 0 && prevTurns[0].player === 'X') {
      currentPlayer = '0'
    }
  return currentPlayer  
}

function App() {
  const [gameTurns, setGameTurns] = useState([])

  const activePlayer = deriveActivePlayer(gameTurns)
  function handleSelectSquare(rowIndex, colIndex) {
    setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? '0' : 'X')
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns)
      const updatedTurns = [{ square: {row: rowIndex, col: colIndex}, player: currentPlayer}, ...prevTurns]
      return updatedTurns
    })
  }
  
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X'}></Player>
          <Player initialName="Player 2" symbol="0" isActive={activePlayer === '0'}></Player>
        </ol>

        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns}/>
      </div>

      <Log turns={gameTurns}/>
    </main>
  )
}

export default App
