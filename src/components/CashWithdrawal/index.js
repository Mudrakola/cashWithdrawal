import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {
    count: 2000,
  }

  onUpdate = value => {
    this.setState(prevState => ({count: prevState.count - value}))
  }

  render() {
    const {count} = this.state
    const {denominationsList} = this.props

    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="profile">
            <div className="para-container">
              <p className="para">s</p>
            </div>
            <h1 className="heading">Sarah Williams</h1>
          </div>
          <div className="rupee-container">
            <p className="balancePara">Your Balance</p>
            <div>
              <p className="rupees">{count}</p>
              <p className="rupee-para">In Rupees</p>
            </div>
          </div>
          <p className="withdraw">Withdraw</p>
          <p className="total">CHOOSE SUM (IN RUPEES)</p>
          <ul className="ulcon">
            <div className="container">
              {denominationsList.map(eachItem => (
                <DenominationItem
                  denominations={eachItem}
                  onUpdate={this.onUpdate}
                  key={eachItem.id}
                />
              ))}
            </div>
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
