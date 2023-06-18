import useBoardContext from '../hooks/useBoardContext'

const Status = () => {
  const { status } = useBoardContext()

  return <p className='status'>{status}</p>
}
export default Status
