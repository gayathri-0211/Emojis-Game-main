// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {pre, fn} = props

  const win = pre === 12

  const pressed = () => {
    fn()
  }

  return win ? (
    <div className="win-card">
      <div className="content">
        <h1 className="title">You Won</h1>
        <p className="des">Best Score</p>
        <p className="score">12/12</p>
        <button type="button" className="btnn" onClick={pressed}>
          Play Again
        </button>
      </div>
      <div className="image-div">
        <img
          src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
          className="big-image"
          alt="win or lose"
        />
      </div>
    </div>
  ) : (
    <div className="win-card">
      <div className="content">
        <h1 className="title">You Lose</h1>
        <p className="des">Score</p>
        <p className="score">{pre}/12</p>
        <button type="button" className="btnn" onClick={pressed}>
          Play Again
        </button>
      </div>
      <div className="image-div">
        <img
          src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
          className="big-image"
          alt="win or lose"
        />
      </div>
    </div>
  )
}

export default WinOrLoseCard
