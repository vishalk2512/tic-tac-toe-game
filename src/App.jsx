import './App.css'
import { Status, Board, Restart, History } from './components'
import { calculateWinner, calculateNextValue, calculateStatus } from './utils'
import useLocalStorageState from './hooks/useLocalStorageState'
import { BoardContext } from './hooks/useBoardContext'

const initialBoard = Array(9).fill(null)
const initialStep = 0

const App = () => {
  const [boardHistory, setBoardHistory] = useLocalStorageState(
    'tic-tac-toe:boardHistory',
    [initialBoard]
  )
  const [currentStep, setCurrentStep] = useLocalStorageState(
    'tic-tac-toe:currentStep',
    initialStep
  )

  const currentBoard = boardHistory[currentStep]
  const winner = calculateWinner(currentBoard)
  const nextValue = calculateNextValue(currentBoard)
  const status = calculateStatus(winner, currentBoard, nextValue)

  const updateBoard = (id) => {
    if (winner || currentBoard[id]) return

    const newBoard = [...currentBoard]
    newBoard[id] = nextValue

    const newBoardHistory = boardHistory.slice(0, currentStep + 1)
    setBoardHistory([...newBoardHistory, newBoard])
    setCurrentStep(newBoardHistory.length)
  }

  const restart = () => {
    if (currentStep === 0 && !boardHistory[0].every(Boolean)) return
    setBoardHistory([initialBoard])
    setCurrentStep(initialStep)
  }

  return (
    <BoardContext.Provider
      value={{
        boardHistory,
        currentBoard,
        currentStep,
        setCurrentStep,
        updateBoard,
        status,
        restart,
      }}
    >
      <div className='app'>
        <div>
          <Status />
          <Board />
          <Restart />
        </div>
        <div>
          <History />
        </div>
      </div>
    </BoardContext.Provider>
  )
}

export default App
