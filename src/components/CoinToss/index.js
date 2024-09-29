import './index.css'
import {Component} from 'react'

class CoinToss extends Component {
  state = {
    total: 0,
    heads: 0,
    tails: 0,
    randomNum: 0,
    imgSrc: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  onclickBtn = () => {
    const tossResult = Math.floor(Math.random() * 2)
    const isHeads = tossResult === 0
    const newImgSrc = isHeads
      ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

    this.setState(prevState => ({
      total: prevState.total + 1,
      heads: isHeads ? prevState.heads + 1 : prevState.heads,
      tails: !isHeads ? prevState.tails + 1 : prevState.tails,
      imgSrc: newImgSrc,
    }))
  }

  render() {
    const {total, heads, tails, imgSrc} = this.state
    return (
      <div className="bg-contaer">
        <div className="second">
          <h1>Coin Toss Game</h1>
          <p className="para1">Heads (or) Tails</p>
          <img src={imgSrc} alt="toss result" />
          <button onClick={this.onclickBtn}>Toss coin</button>
          <div className="fourth">
            <p className="para">Total: {total}</p>
            <p className="para">Heads: {heads}</p>
            <p className="para">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
