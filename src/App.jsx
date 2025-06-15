import Player from "./components/Player"


function App() {
   

  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName="Player 1" symbol="X"></Player>
          <Player initialName="Player 2" symbol="0"></Player>
        </ol>

        GAME BOARD
      </div>

      LOG
    </main>
  )
}

export default App
