import useBoardContext from '../hooks/useBoardContext'

const History = () => {
  const { boardHistory, currentStep, setCurrentStep } = useBoardContext()
  return (
    <div className='history-container'>
      <p className='status'>History</p>
      {boardHistory.map((_, step) => {
        const isCurrentStep = step === currentStep
        return (
          <button
            className='history-btn'
            key={step}
            disabled={isCurrentStep}
            onClick={() => setCurrentStep(step)}
          >
            Go to move #{step} {isCurrentStep && '(current)'}
          </button>
        )
      })}
    </div>
  )
}
export default History
