import {useState} from 'react'
import ComponentB from '../ComponentB'
import './index.css'

const ComponentA = () => {
  const [cendol, setCendol] = useState(2)
  const [isRed, setIsRed] = useState(false)

  function handleClick() {
    setIsRed(!isRed)
  }

  return (
    <div>
      <div className="container">
        <div
          className={isRed ? `card ${'red-button'}` : `card ${'blue-button'}`}>
          <p>{cendol}</p>
          <ComponentB cendol={cendol} setCendol={setCendol} />
        </div>
      </div>
      <button type="button" onClick={handleClick} className="change-button">
        Change Color
      </button>
    </div>
  )
}

export default ComponentA
