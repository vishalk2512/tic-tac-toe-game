import useBoardContext from '../hooks/useBoardContext'

const Board = () => {
  const { currentBoard, updateBoard } = useBoardContext()

  return (
    <div className='board'>
      {currentBoard.map((item, index) => (
        <div className='box' key={index} onClick={() => updateBoard(index)}>
          {item}
        </div>
      ))}
    </div>
  )
}
export default Board
