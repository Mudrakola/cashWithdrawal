import './index.css'

const DenominationItem = props => {
  const {denominations, onUpdate} = props
  const {id, value} = denominations

  const onAmountUpdate = () => {
    onUpdate(value)
  }
  return (
    <li className="list-container">
      <button className="button" onClick={onAmountUpdate}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
