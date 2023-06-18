import { useContext, createContext } from 'react'

export const BoardContext = createContext(null)

const useBoardContext = () => useContext(BoardContext)

export default useBoardContext
