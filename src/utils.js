const winningLines = ['012', '345', '678', '036', '147', '258', '048', '246']
export const calculateWinner = (board) => {
  for (const [a, b, c] of winningLines) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a]
    }
  }
  return null
}

export const calculateNextValue = (board) => {
  return board.filter(Boolean).length % 2 === 0 ? 'X' : 'O'
}

export const calculateStatus = (winner, board, nextValue) => {
  return winner
    ? `Winner: ${winner}`
    : board.every(Boolean)
    ? `Draw the game`
    : `Next player: ${nextValue}`
}
