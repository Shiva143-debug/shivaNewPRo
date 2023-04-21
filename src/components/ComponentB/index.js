import './index.css'

const ComponentB = props => {
  const {setCendol} = props
  const handleClick = () => {
    setCendol(prevCendol => prevCendol + 10)
  }

  return (
    <div>
      <button type="button" onClick={handleClick} className="button">
        Increment Cendol by 10
      </button>
    </div>
  )
}
export default ComponentB
