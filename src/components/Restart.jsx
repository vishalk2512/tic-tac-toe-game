import useBoardContext from '../hooks/useBoardContext'

const Restart = () => {
  const { restart } = useBoardContext()

  return (
    <button className='btn' onClick={restart}>
      restart
    </button>
  )
}
export default Restart
